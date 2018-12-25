from flask import Flask, render_template, redirect, request, url_for, jsonify, session, json, session
from flask_pymongo import PyMongo

from bson.json_util import dumps
from bson import json_util, ObjectId

#Flask App Structure
app = Flask(__name__, static_folder="./dist", template_folder="./")
app.config.from_object(__name__)

#Database connection
app.config['MONGO_DBNAME'] = 'letsfind'
app.config['MONGO_URI'] = 'mongodb://NaveedRana:naveed1214@ds117423.mlab.com:17423/letsfind'
mongo = PyMongo(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'



#server route
@app.route('/')
def index():
    return "Lets find server, up and running"

if __name__ == "__main__":
    app.run(port='8080', debug=True)