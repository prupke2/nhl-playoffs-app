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

@app.route('/names/<string:name>')
def check_name(name):
    status = "unavailable"
    if len(name) > 0:
        status="available"
    return {'status': status}

@app.route('/api/save', methods=["POST"])
def save_byes():
    print("SAVING...")

    data = json.loads(request.data)
    print(str(data))
    bye_teams = data['byeTeams']
    qualifying_teams = data['qualifyingTeams']
    print(str(qualifying_teams))
    print("CLUB: " + str(data['club']))

    return {"status": "saved", "message": "Your picks were saved. Come back soon to see the leaderboard!"}
