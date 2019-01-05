from flask import Flask, render_template, redirect, request, url_for, jsonify, session, json, session
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
from bson import json_util, ObjectId
from datetime import date
import pymongo

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
            'img':missingPerson['img'],
            'name':missingPerson['name'],
            'gender':missingPerson['gender'], 
            'disability':missingPerson['disability'],
            'description':missingPerson['description'],
            'status':missingPerson['status'],
            'age':missingPerson['age'],
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
            image.save('uploads/' + image.filename)
            missingPerson['img'] = image.filename
            missingPerson['name'] = request.form['name']
            missingPerson['gender'] = request.form['gender']
            missingPerson['disability'] = request.form['disability']
            missingPerson['description'] = request.form['description']
            missingPerson['status'] = request.form['status']
            missingPerson['age'] = request.form['age']
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

if __name__ == "__main__":
    app.run(host='0.0.0.0',port='2020', debug=True)