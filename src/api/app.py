import time
from flask import Flask, request
import pymysql.cursors
import os
import json

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')
    
@app.route('/api/time')
def get_time():
    return {'time': time.time()}

@app.route('/api/save_byes', methods=["POST"])
def save_byes():
    data = json.loads(request.data)
    teams = data['teams']
    for team in teams:
        if team['type'] in ('east', 'west'):
            return {"status": "unfinished"}
        print(team['short'] + ": " + team['type'])
    # print("Data: " + str(data))
    return {"status": "saved"}
