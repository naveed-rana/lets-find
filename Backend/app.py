from flask import Flask, render_template, redirect, request, url_for, jsonify, session, json, session
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
from bson import json_util, ObjectId

#Flask App Structure
app = Flask(__name__, static_folder="./dist", template_folder="./")
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

#LoginUser
@app.route('/loginuser', methods=['POST'])
@cross_origin()
def loginUser():
    userAuth = 'notsuccess'
    login = {}
    data = request.get_json(silent=True)
    data = data["user"]
    userKey = ''
    for key in data:
        if key != "userName":
            login[key] =  data[key]          
            userAuth = 'success'
            users = mongo.db.tbl_users.find_one(login)
            userKey  = users['_id'] 
            break
            session['logged_in'] = True 
        else:
            userAuth = 'not-success'
    key = json.loads(json_util.dumps(userKey))
    userData = json.loads(json_util.dumps(users))
    session['userKey'] = key['$oid']
    session['userVal'] = userData
    return userAuth

#UserValidate
@app.route('/logginUserData', methods=['GET'])
@cross_origin()
def loggedinUser():
    data = session
    dataUid = session['userKey']
    datareq = data['userVal']
    print('id', datareq['_id'])
    userVal = {
        'email': datareq['email'],
        'username': datareq['userName'],
        'joiningdate': datareq['joiningdate'],
        'uid': dataUid
    }
    return jsonify(userVal)


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
    try:
        data = request.get_json(silent=True)
        data = data["missingperson"]
        for key in data:
            missingPerson[key] = data[key]
        task = mongo.db.missing_persons.insert(missingPerson)
        print(task)
        status = "success"
        return status
    except Exception, e:
        print str(e)
        return status


if __name__ == "__main__":
    app.run(port='8080', debug=True)