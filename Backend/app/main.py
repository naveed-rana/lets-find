

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
import sqlite3
from sqlite3 import Error
import time
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
db_file = "LetsFind.db"
try:
    conn = sqlite3.connect(db_file)
except Error as e:
    print(e)
startTime = time.time()

cur = conn.cursor()

key = '27bf9fa5f3c04f34b463006bb757ab67'
CF.Key.set(key)
base_url = 'https://australiaeast.api.cognitive.microsoft.com/face/v1.0'
CF.BaseUrl.set(base_url)

def matchFace(imgIds):
    print(imgIds)
    similarity = CF.face.verify(imgIds[0], imgIds[1])
    return similarity


def updateKey(imagePath, uType):
    imageName = imagePath.split("/")[-1]
    print("[info] Updating Faceid For:", imageName)
    toMatchFace = CF.face.detect(imagePath)[0]['faceId']
    if uType == "update":
        cur.execute("UPDATE face_ids SET f_key = '" + toMatchFace + "', f_date = '" + str(time.time()) + "' WHERE f_file='" + imageName + "'")
    else:
        allVals = (toMatchFace, imageName, time.time())
        cur.execute("INSERT INTO face_ids (f_key, f_file, f_date) VALUES (?,?,?)", allVals)
    conn.commit()
    return toMatchFace

def getFaceId(imagePath):
    imageName = imagePath.split("/")[-1]
    for row in cur.execute("SELECT count(*) FROM face_ids WHERE f_file = '" + imageName + "'"):
        if row[0] > 0:
            for row in cur.execute("SELECT * FROM face_ids WHERE f_file = '" + imageName + "'"):
                if (time.time() - float(row[3])) < 86000:
                    return row[1]
                else:
                    print("Getting New Id for:", imageName)
                    faceId = updateKey(imagePath, "update")
                    return faceId
        else:
            print("Getting New Id for:", imageName)
            faceId = updateKey(imagePath, "add")
            return faceId
def sortSecond(val): 
    return val[1]
def checkEncoding(Etype, imagePath):
    
    matches = []
    try:
        toMatchFace = getFaceId("data/" + Etype + "/" + imagePath)
    except Exception,e:
        print(e)
    for img in os.listdir("data/" + Etype):
        imgPath = "data/" + Etype + "/" + img
        print(imgPath)
        if img != imagePath.split("/")[-1]:
            nMatch = getFaceId(imgPath)
            result = matchFace([toMatchFace, nMatch])
            matches.append({"imgName": img, 'result': result['isIdentical'], 'confidence': result['confidence']})
            matches.append((img, result['confidence']))
    print(matches)
    matches.sort(key = sortSecond, reverse = True)
    lessRes = matches[:5]
    mList = []
    for m in lessRes:
        mList.append(m[0])
    print(mList)
    return mList

def updateEncodings():
    for img in os.listdir("data/found"):
        updateKey("data/found/" + img, "update")
def markResolved(Etype, imageName):
    print(Etype)
    try:
        imagePath = "data/" + Etype + "/" + imageName
        shutil.move(imagePath, "data/resolved/"  + imageName)
        cur.execute("DELECT FROM face_ids WHERE f_file = '" + imagePath + "'")
        conn.commit()
        return "ok"
    except:
        return "err"
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
     query = missing_persons.find().sort([("createdat",pymongo.DESCENDING)]).limit(7)
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

#Get Active Cases
@app.route('/solvedCase', methods=['POST'])
@cross_origin()
def solvedCase():
    status = "not_success"
    try:
        data = request.get_json(silent=True)
        case = {}
        data = data["case"]
        for key in data:
            case[key] = data[key]
        task = mongo.db.resolved_cases.insert(case)
        markResolved(case['currentStatus'],case['image'])
        result = mongo.db.missing_persons.delete_one({'img': case['image']})
        status = "success"
        return status
    except:
     return status


#Get home stories
@app.route('/activeStories', methods=['GET'])
@cross_origin()
def activeStories():
    status = "not-success"
    try:
     cell = request.args.get('data')
     missing_persons = mongo.db.missing_persons
     query = missing_persons.find({"mobile":cell}).sort([("createdat",pymongo.DESCENDING)])
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

     

     #Get home getresolvedCases
@app.route('/getresolvedCases', methods=['GET'])
@cross_origin()
def getresolvedCases():
    status = "not-success"
    try:
     email = request.args.get('data')
     missing_persons = mongo.db.resolved_cases
     query = missing_persons.find({"email":email})
     output = []
     for missingPerson in query:
        id = json.loads(dumps(missingPerson['_id']))
        output.append({
            'id':id,
            'image':missingPerson['image'],
            'name':missingPerson['name'],
            'gender':missingPerson['gender'], 
            'disability':missingPerson['disability'],
            'description':missingPerson['description'],
            'status':missingPerson['status'],
            'age':missingPerson['age'],
            'location':missingPerson['location']
        })
     print(output)
     return jsonify({'output':output})
    except Exception,e:
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
                print(data)
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
    app.run(host='0.0.0.0',port='2020', debug=True)