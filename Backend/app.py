from flask import Flask, render_template, redirect, request, url_for, jsonify, session, json, session
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
from bson import json_util, ObjectId
from datetime import date
import pymongo
import face_recognition
import os
import numpy as np

#Flask App Structure
app = Flask(__name__, static_folder="./uploads", template_folder="./")
app.config.from_object(__name__)

#Cors Setup
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#Database connection
app.config['MONGO_DBNAME'] = 'letsfind'
app.config['MONGO_URI'] = 'mongodb://NaveedRana:naveed1214@ds117423.mlab.com:17423/letsfind'
mongo = PyMongo(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


#.....................Ai...................
# Get encodings of given image
def encodeFace(IMG_PATH):
    toMatch = face_recognition.load_image_file(IMG_PATH)
    results = face_recognition.face_encodings(toMatch)
    if len(results) != 0:
        return results[0]
    else:
        return None

# Update Encoding files of the given type
# New image encodings will be added
def updateEncodings(Etype):
    oldEncodings = np.array(np.load(Etype + ".npy"))
    not_found = 0
    FILE_DIR = "data/" + Etype
    totalOldEncodings = len(oldEncodings)
    oldEncodingNames = oldEncodings[:,1]
    oldEncodings = [a for a in oldEncodings]
    for imgName in os.listdir(FILE_DIR):
        if imgName not in oldEncodingNames:
            toMatch_encodings = encodeFace(os.path.join(FILE_DIR, imgName))
            if toMatch_encodings is not None:
                oldEncodings.append([toMatch_encodings, imgName])
            else:
                not_found += 1

    np.save(Etype + ".npy", oldEncodings)
    return {"Old": totalOldEncodings, "new added": len(oldEncodings) - totalOldEncodings, "not found": not_found}     

# Create new encodings file
# Only require while publishing new application
def createEncodings(Etype):
    encodings = []
    not_found = 0
    FILE_DIR = "data/" + Etype
    for imgName in os.listdir(FILE_DIR):
        toMatch_encodings = encodeFace(os.path.join(FILE_DIR, imgName))
        if toMatch_encodings is not None:
            encodings.append([toMatch_encodings, imgName])
        else:
            not_found += 1
    np.save(Etype + ".npy", encodings)  
    return {"encoded": len(encodings), "not found": not_found}

# Match given face with the selected encoding file and return results
# Currently in results, we only return image name of image which is matched with given face
def matchImage(IMG_PATH, Etype):
    encodings = np.load(Etype + ".npy")
    unknown_encodings = encodeFace(IMG_PATH)
    if unknown_encodings is None:
        return "No face found"
    matched_encodings = []
    for encoding in encodings:
        result = face_recognition.compare_faces([unknown_encodings], encoding[0])
        if result[0] == True:
            matched_encodings.append(encoding[1])
    return matched_encodings

# createEncodings('found')

#.....................End Ai...............


#server route working
@app.route('/')
def index():
    return "Lets find server, up and running"


#Get home stories
@app.route('/homeStories', methods=['GET'])
@cross_origin()
def gethomeStories():
    status = "not-success"
    try:
     missing_persons = mongo.db.missing_persons
     query = missing_persons.find().sort([("createdat",pymongo.ASCENDING)]).limit(5)
     output = []
     for missingPerson in query:
        id = json.loads(dumps(missingPerson['_id']))
        output.append({
            'id':id,
            'image':missingPerson['img'],
            'name':missingPerson['name'],
            'gender':missingPerson['gender'], 
            'disability':missingPerson['disability'],
            'description':missingPerson['description'],
            'status':missingPerson['status'],
            'age':missingPerson['age'],
            'post_By':missingPerson['post_By'],
            'mobile':missingPerson['mobile'],
            'location':missingPerson['location'],
            'createdat':missingPerson['createdat'],
        })
     return jsonify({'output':output})
    except Exception, e:
     print str(e)
     return status

#RegisterUser Working
@app.route('/registeruser', methods=['POST'])
@cross_origin()
def registerUser():
    userRegister = "not-success"
    user = {}
    try:
        data = request.get_json(silent=True)
        data = data["user"]
        for key in data:
            user[key] = data[key]
        task = mongo.db.tbl_users.insert(user)
        print(task)
        userRegister = "success"
        return userRegister
    except Exception, e:
        print str(e)
        return userRegister


#Update user
@app.route('/updateuser', methods=['POST'])
@cross_origin()
def updateUser():
    userUpdate = "not-success"
    user = {}
    try:
        data = request.get_json(silent=True)
        data = data["user"]
        for key in data:
            user[key] = data[key]
        task = mongo.db.tbl_users.insert(user)
        print(task)
        userUpdate = "success"
        return userUpdate
    except Exception, e:
        print str(e)
        return userUpdate

#LoginUser
@app.route('/loginuser', methods=['POST'])
@cross_origin()
def loginUser():
    userAuth = 'notsuccess'
    login = {}
    data = request.get_json(silent=True)
    try:
        data = data["user"]
        userKey = ''
        for key in data:
            login[key] =  data[key]          
        users = mongo.db.tbl_users.find_one(login)
        print(users)
        if users: 
            userAuth = 'success'
            userKey  = users['_id'] 
            session['logged_in'] = True 
            key = json.loads(json_util.dumps(userKey))
            userData = json.loads(json_util.dumps(users))
            print(key['$oid'])
            session['userKey'] = key['$oid']
            session['userVal'] = userData
            print(session['userKey'])
            return userAuth
        else:    
            return userAuth
    except Exception, e:
        print str(e)
        return str(e)

#UserValidate
@app.route('/logginUserData', methods=['GET'])
@cross_origin()
def loggedinUser():
    try:
        data = session
        datareq = data['userVal']
        print('id', datareq['_id'])
        return jsonify(datareq)
    except Exception, e:
        return str(e)
    

#LoginUser
@app.route('/logoutUser', methods=['POST'])
def logoutUser():
    users = session
    logout = request.get_json(silent=True)
    session.clear()
    return 'Sucesfully logout'


#AddFormData
@app.route('/registerMissingPerson', methods=['POST'])
@cross_origin()
def registerMissingReq():
    status = "not-success"
    missingPerson = {}
    if request.files['image']:
        try:
            image = request.files["image"]
            if request.form['status'] == 'Found':
                image.save('data/found/' + image.filename)
                updateEncodings('found')
            else:
                image.save('data/missings/' + image.filename)
                updateEncodings('missings')
            missingPerson['img'] = image.filename
            missingPerson['name'] = request.form['name']
            missingPerson['gender'] = request.form['gender']
            missingPerson['disability'] = request.form['disability']
            missingPerson['description'] = request.form['description']
            missingPerson['status'] = request.form['status']
            missingPerson['age'] = request.form['age']
            missingPerson['mobile'] = request.form['mobile']
            missingPerson['post_By'] = request.form['post_By']
            missingPerson['location'] = request.form['location'] 
            missingPerson['createdat'] = str(date.today())  
            task = mongo.db.missing_persons.insert(missingPerson)
            print(task)
            status = "success"
            return status
        except Exception, e:
            print str(e)
            return status
    else:
        return status

# output = []
# results = matchImage("420.jpg", "found")
# resultsMissing = matchImage("a.jpeg", "found")
# print(resultsMissing)
# if type(results) is list or type(resultsMissing) is list:
#     for index in resultsMissing:
#                     output.append({
#                             'img':index

#                         })
# if len(output) >= 1:                        
#     print(len(output))
# else:
#     print(len(output))
#search route
@app.route('/searchbyimage', methods=['POST'])
@cross_origin()
def searchMissingReq():
    status = "not-success"
    missingPerson = {}
    if request.files['image']:
        try:
            output = []
            image = request.files["image"]
            image.save('current.jpg')
            results = matchImage("current.jpg", "found")
            resultsMissing = matchImage("current.jpg", "found")
            print(results)
            print(resultsMissing)
            if type(results) is list:
                for index in results:
                    output.append({
                            'img':index
                        })
            if type(resultsMissing) is list:
                for index in resultsMissing:
                    output.append({
                            'img':index
                        })
            print(output)
            if len(output) >= 1:        
                query = mongo.db.missing_persons.find({"$or":output})
                data = []
                for missingPerson in query:
                    data.append({
                'image':missingPerson['img'],
                'name':missingPerson['name'],
                'gender':missingPerson['gender'], 
                'disability':missingPerson['disability'],
                'description':missingPerson['description'],
                'status':missingPerson['status'],
                'age':missingPerson['age'],
                'post_By':missingPerson['post_By'],
                'mobile':missingPerson['mobile'],
                'location':missingPerson['location'],
                'createdat':missingPerson['createdat'],
                    })
                return jsonify({'output':data})
            else:
                return 'no result'
        except Exception, e:
            print str(e)
            return status
    else:
        return status


if __name__ == "__main__":
    app.run(host='0.0.0.0',port='2020', debug=True)