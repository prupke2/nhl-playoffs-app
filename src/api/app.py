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

    return {"status": "saved", "message": "Your picks were saved. Come back soon to see the leaderboard!"}

@app.route('/api/get_teams', methods=["GET"])
def get_teams():
    print("Getting teams...")
    return {
        "bye_teams": [
            {
                "name": "ddd",
                "spot": "east1",
                "team": "BOS"
            },
            {
                "name": "ddd",
                "spot": "east2",
                "team": "TBL"
            },
            {
                "name": "ddd",
                "spot": "east3",
                "team": "WSH"
            },
            {
                "name": "ddd",
                "spot": "east4",
                "team": "PHI"
            },
            {
                "name": "ddd",
                "spot": "west1",
                "team": "STL"
            },
            {
                "name": "ddd",
                "spot": "west2",
                "team": "COL"
            },
            {
                "name": "ddd",
                "spot": "west3",
                "team": "VGK"
            },
            {
                "name": "ddd",
                "spot": "west4",
                "team": "DAL"
            },
            {
                "name": "aaaa",
                "spot": "east1",
                "team": "BOS"
            },
            {
                "name": "aaaa",
                "spot": "east3",
                "team": "TBL"
            },
            {
                "name": "aaaa",
                "spot": "east2",
                "team": "WSH"
            },
            {
                "name": "aaaa",
                "spot": "east4",
                "team": "PHI"
            },
            {
                "name": "aaaa",
                "spot": "west1",
                "team": "STL"
            },
            {
                "name": "aaaa",
                "spot": "west2",
                "team": "COL"
            },
            {
                "name": "aaaa",
                "spot": "west4",
                "team": "VGK"
            },
            {
                "name": "aaaa",
                "spot": "west3",
                "team": "DAL"
            },
            {
                "name": "paul22",
                "spot": "east1",
                "team": "BOS"
            },
            {
                "name": "paul22",
                "spot": "east2",
                "team": "TBL"
            },
            {
                "name": "paul22",
                "spot": "east3",
                "team": "WSH"
            },
            {
                "name": "paul22",
                "spot": "east4",
                "team": "PHI"
            },
            {
                "name": "paul22",
                "spot": "west1",
                "team": "STL"
            },
            {
                "name": "paul22",
                "spot": "west2",
                "team": "COL"
            },
            {
                "name": "paul22",
                "spot": "west3",
                "team": "VGK"
            },
            {
                "name": "paul22",
                "spot": "west4",
                "team": "DAL"
            },
            {
                "name": "f",
                "spot": "east1",
                "team": "BOS"
            },
            {
                "name": "f",
                "spot": "east2",
                "team": "TBL"
            },
            {
                "name": "f",
                "spot": "east3",
                "team": "WSH"
            },
            {
                "name": "f",
                "spot": "east4",
                "team": "PHI"
            },
            {
                "name": "f",
                "spot": "west1",
                "team": "STL"
            },
            {
                "name": "f",
                "spot": "west2",
                "team": "COL"
            },
            {
                "name": "f",
                "spot": "west3",
                "team": "VGK"
            },
            {
                "name": "f",
                "spot": "west4",
                "team": "DAL"
            },
            {
                "name": "test2",
                "spot": "east2",
                "team": "BOS"
            },
            {
                "name": "test2",
                "spot": "east1",
                "team": "TBL"
            },
            {
                "name": "test2",
                "spot": "east3",
                "team": "WSH"
            },
            {
                "name": "test2",
                "spot": "east4",
                "team": "PHI"
            },
            {
                "name": "test2",
                "spot": "west1",
                "team": "STL"
            },
            {
                "name": "test2",
                "spot": "west2",
                "team": "COL"
            },
            {
                "name": "test2",
                "spot": "west3",
                "team": "VGK"
            },
            {
                "name": "test2",
                "spot": "west4",
                "team": "DAL"
            },
            {
                "name": "sddfssf",
                "spot": "east1",
                "team": "BOS"
            },
            {
                "name": "sddfssf",
                "spot": "east2",
                "team": "TBL"
            },
            {
                "name": "sddfssf",
                "spot": "east4",
                "team": "WSH"
            },
            {
                "name": "sddfssf",
                "spot": "east3",
                "team": "PHI"
            },
            {
                "name": "sddfssf",
                "spot": "west1",
                "team": "STL"
            },
            {
                "name": "sddfssf",
                "spot": "west2",
                "team": "COL"
            },
            {
                "name": "sddfssf",
                "spot": "west3",
                "team": "VGK"
            },
            {
                "name": "sddfssf",
                "spot": "west4",
                "team": "DAL"
            }
        ],
        "qualifying_teams": [{
                "matchup": "e1",
                "name": "ddd",
                "team": "PIT"
            },
            {
                "matchup": "e2",
                "name": "ddd",
                "team": "CAR"
            },
            {
                "matchup": "e3",
                "name": "ddd",
                "team": "FLA"
            },
            {
                "matchup": "e4",
                "name": "ddd",
                "team": "TOR"
            },
            {
                "matchup": "w1",
                "name": "ddd",
                "team": "EDM"
            },
            {
                "matchup": "w2",
                "name": "ddd",
                "team": "NSH"
            },
            {
                "matchup": "w3",
                "name": "ddd",
                "team": "MIN"
            },
            {
                "matchup": "w4",
                "name": "ddd",
                "team": "CGY"
            },
            {
                "matchup": "e1",
                "name": "aaaa",
                "team": "PIT"
            },
            {
                "matchup": "e2",
                "name": "aaaa",
                "team": "NYR"
            },
            {
                "matchup": "e3",
                "name": "aaaa",
                "team": "NYI"
            },
            {
                "matchup": "e4",
                "name": "aaaa",
                "team": "TOR"
            },
            {
                "matchup": "w1",
                "name": "aaaa",
                "team": "EDM"
            },
            {
                "matchup": "w2",
                "name": "aaaa",
                "team": "NSH"
            },
            {
                "matchup": "w3",
                "name": "aaaa",
                "team": "MIN"
            },
            {
                "matchup": "w4",
                "name": "aaaa",
                "team": "CGY"
            },
            {
                "matchup": "e1",
                "name": "paul22",
                "team": "MTL"
            },
            {
                "matchup": "e2",
                "name": "paul22",
                "team": "CAR"
            },
            {
                "matchup": "e3",
                "name": "paul22",
                "team": "FLA"
            },
            {
                "matchup": "e4",
                "name": "paul22",
                "team": "TOR"
            },
            {
                "matchup": "w1",
                "name": "paul22",
                "team": "EDM"
            },
            {
                "matchup": "w2",
                "name": "paul22",
                "team": "NSH"
            },
            {
                "matchup": "w3",
                "name": "paul22",
                "team": "MIN"
            },
            {
                "matchup": "w4",
                "name": "paul22",
                "team": "CGY"
            },
            {
                "matchup": "e1",
                "name": "f",
                "team": "PIT"
            },
            {
                "matchup": "e2",
                "name": "f",
                "team": "CAR"
            },
            {
                "matchup": "e3",
                "name": "f",
                "team": "NYI"
            },
            {
                "matchup": "e4",
                "name": "f",
                "team": "TOR"
            },
            {
                "matchup": "w1",
                "name": "f",
                "team": "EDM"
            },
            {
                "matchup": "w2",
                "name": "f",
                "team": "NSH"
            },
            {
                "matchup": "w3",
                "name": "f",
                "team": "VAN"
            },
            {
                "matchup": "w4",
                "name": "f",
                "team": "WPG"
            },
            {
                "matchup": "e1",
                "name": "test2",
                "team": "PIT"
            },
            {
                "matchup": "e2",
                "name": "test2",
                "team": "CAR"
            },
            {
                "matchup": "e3",
                "name": "test2",
                "team": "NYI"
            },
            {
                "matchup": "e4",
                "name": "test2",
                "team": "CBJ"
            },
            {
                "matchup": "w1",
                "name": "test2",
                "team": "EDM"
            },
            {
                "matchup": "w2",
                "name": "test2",
                "team": "NSH"
            },
            {
                "matchup": "w3",
                "name": "test2",
                "team": "VAN"
            },
            {
                "matchup": "w4",
                "name": "test2",
                "team": "WPG"
            },
            {
                "matchup": "e1",
                "name": "sddfssf",
                "team": "MTL"
            },
            {
                "matchup": "e2",
                "name": "sddfssf",
                "team": "CAR"
            },
            {
                "matchup": "e3",
                "name": "sddfssf",
                "team": "FLA"
            },
            {
                "matchup": "e4",
                "name": "sddfssf",
                "team": "TOR"
            },
            {
                "matchup": "w1",
                "name": "sddfssf",
                "team": "CHI"
            },
            {
                "matchup": "w2",
                "name": "sddfssf",
                "team": "NSH"
            },
            {
                "matchup": "w3",
                "name": "sddfssf",
                "team": "VAN"
            },
            {
                "matchup": "w4",
                "name": "sddfssf",
                "team": "CGY"
            }
        ]
    }
