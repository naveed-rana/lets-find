

from flask import Flask, render_template, redirect, request, url_for, jsonify, session, json, session
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
from bson import json_util, ObjectId
from datetime import date
import pymongo
# import face_recognition
import os, shutil
import cognitive_face as CF
# import numpy as np



#Flask App Structure
app = Flask(__name__, static_folder="./data", template_folder="./")
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



# ..................Azure Solution.......
key = 'aad1c27d4f4248ceb4eb5df31ce8c636'  # Replace with a valid Subscription Key here.
CF.Key.set(key)
base_url = 'https://australiaeast.api.cognitive.microsoft.com/face/v1.0'  # Replace with your regional Base URL
CF.BaseUrl.set(base_url)

def matchFace(imgIds):
    similarity = CF.face.verify(imgIds[0], imgIds[1])
    return similarity


def checkEncoding(Etype, imagePath):
    matches = []
    toMatchFace = CF.face.detect(imagePath)
    toMatch = toMatchFace[0]['faceId']
    for img in os.listdir("data/" + Etype):
        imgPath = "data/" + Etype + "/" + img
        if imgPath != imagePath:
            nMatch = CF.face.detect(imgPath)[0]['faceId']
            result = matchFace([toMatch, nMatch])
            if result['isIdentical'] == True:
                matches.append(img)
    return matches


def markResolved(Etype, imageName):
    shutil.move("data/" + Etype + "/" + imageName, "data/resolved/"  + imageName)
#...................Azure Solution.......


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
    except:
    #  print str(e)
     return status



#Get home stories
@app.route('/activeStories', methods=['GET'])
@cross_origin()
def activeStories():
    status = "not-success"
    try:
     cell = request.args.get('data')
     missing_persons = mongo.db.missing_persons
     query = missing_persons.find({"mobile":cell})
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
    except:
    #  print str(e
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
    except:
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
    except:
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
            return jsonify(userData)
        else:    
            return userAuth
    except:
        return userAuth

#UserValidate
@app.route('/logginUserData', methods=['GET'])
@cross_origin()
def loggedinUser():
    try:
        data = session
        datareq = data['userVal']
        print('id', datareq['_id'])
        return jsonify(datareq)
    except:
        return "error"
    

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
                image.save('data/Found/' + image.filename)
                # updateEncodings('found')
            else:
                image.save('data/Missing/' + image.filename)
                # updateEncodings('missings')
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
        except:
            return status
    else:
        return status



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
            results = checkEncoding("Found", "current.jpg")
            resultsMissing = checkEncoding("Missing", "current.jpg")
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
                return  jsonify({'output':[]})
        except:
            return status
    else:
        return status




#searchbyfilters
@app.route('/searchbyfilters', methods=['POST'])
@cross_origin()
def searchByName():
    status = "not-success"
    filters = []
    try:
        data = request.get_json(silent=True)
        data = data["filters"]
        for key in data:
            if  data[key] !='':
             filters.append({
                            key:data[key]
                        })
        print(filters)
        query = mongo.db.missing_persons.find({"$and":filters})
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
    except:
        # print str(e)
        return status



if __name__ == "__main__":
    app.run(host='0.0.0.0',port='80', debug=True)