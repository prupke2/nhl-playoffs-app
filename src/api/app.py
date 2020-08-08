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

@app.route('/api/leaderboard')
def leaderboard():
    return {""}

@app.route('/api/user_picks')
def user_picks():
    return {
            "picks": [
                {
                "points": 2, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "aa"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "aa"
                }, 
                {
                "points": "null", 
                "spot": "e1", 
                "team": "PIT", 
                "user": "aa"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "aa"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "aa"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "aa"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "aa"
                }, 
                {
                "points": 0, 
                "spot": "w2", 
                "team": "ARI", 
                "user": "aa"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "aa"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "aa"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "aSD"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "aSD"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "aSD"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "aSD"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "aSD"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "aSD"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "aSD"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "aSD"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "aSD"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "aSD"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "asdfd"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "asdfd"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "asdfd"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "asdfd"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "asdfd"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "asdfd"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "asdfd"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "asdfd"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "asdfd"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "asdfd"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "c"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "c"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "c"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "c"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "c"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "c"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "c"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "c"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "c"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "c"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "dd"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "dd"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "dd"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "dd"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "dd"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "dd"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "dd"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "dd"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "dd"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "dd"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "ddd"
                }, 
                {
                "points": 2, 
                "spot": "west1", 
                "team": "STL", 
                "user": "ddd"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "ddd"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "ddd"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "ddd"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "ddd"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "ddd"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "ddd"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "ddd"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "ddd"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "dfsdf"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "dfsdf"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "dfsdf"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "dfsdf"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "dfsdf"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "dfsdf"
                }, 
                {
                "points": 2, 
                "spot": "w1", 
                "team": "CHI", 
                "user": "dfsdf"
                }, 
                {
                "points": 0, 
                "spot": "w2", 
                "team": "ARI", 
                "user": "dfsdf"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "dfsdf"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "dfsdf"
                }, 
                {
                "points": 2, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "ds"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "ds"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "ds"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "ds"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "ds"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "ds"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "ds"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "ds"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "ds"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "ds"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "dss"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "dss"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "dss"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "dss"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "dss"
                }, 
                {
                "points": 0, 
                "spot": "e4", 
                "team": "CBJ", 
                "user": "dss"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "dss"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "dss"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "dss"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "dss"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "f"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "f"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "f"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "f"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "f"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "f"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "f"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "f"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "f"
                }, 
                {
                "points": 0, 
                "spot": "w4", 
                "team": "WPG", 
                "user": "f"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "f"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "f"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "f"
                }, 
                {
                "points": 0, 
                "spot": "e2", 
                "team": "NYR", 
                "user": "f"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "f"
                }, 
                {
                "points": 2, 
                "spot": "w1", 
                "team": "CHI", 
                "user": "f"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "fd"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "VGK", 
                "user": "fd"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "fd"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "fd"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "fd"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "fd"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "fd"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "fd"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "fd"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "fd"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "fdfs"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "fdfs"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "fdfs"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "fdfs"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "fdfs"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "fdfs"
                }, 
                {
                "points": 2, 
                "spot": "w1", 
                "team": "CHI", 
                "user": "fdfs"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "fdfs"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "fdfs"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "fdfs"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "ff"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "ff"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "ff"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "ff"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "ff"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "ff"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "ff"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "ff"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "ff"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "ff"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "WSH", 
                "user": "ffffff"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "ffffff"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "ffffff"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "ffffff"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "ffffff"
                }, 
                {
                "points": 0, 
                "spot": "e4", 
                "team": "CBJ", 
                "user": "ffffff"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "ffffff"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "ffffff"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "ffffff"
                }, 
                {
                "points": 0, 
                "spot": "w4", 
                "team": "WPG", 
                "user": "ffffff"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "fg"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "fg"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "fg"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "fg"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "fg"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "fg"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "fg"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "fg"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "fg"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "fg"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "fgdfg"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "fgdfg"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "fgdfg"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "fgdfg"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "fgdfg"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "fgdfg"
                }, 
                {
                "points": 2, 
                "spot": "w1", 
                "team": "CHI", 
                "user": "fgdfg"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "fgdfg"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "fgdfg"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "fgdfg"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "fs"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "fs"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "fs"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "fs"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "fs"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "fs"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "fs"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "fs"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "fs"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "fs"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "gs"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "gs"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "TBL", 
                "user": "hh"
                }, 
                {
                "points": 2, 
                "spot": "west1", 
                "team": "STL", 
                "user": "hh"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "hh"
                }, 
                {
                "points": 0, 
                "spot": "e2", 
                "team": "NYR", 
                "user": "hh"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "hh"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "hh"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "hh"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "hh"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "hh"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "hh"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "paul22"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "paul22"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "paul22"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "paul22"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "paul22"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "paul22"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "paul22"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "paul22"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "paul22"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "paul22"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "paul4"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "paul4"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "paul4"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "paul4"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "paul4"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "paul4"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "paul4"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "paul4"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "paul4"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "paul4"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "paulf"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "paulf"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "s"
                }, 
                {
                "points": 2, 
                "spot": "west1", 
                "team": "COL", 
                "user": "s"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "s"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "s"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "s"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "s"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "s"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "s"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "s"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "s"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "sa"
                }, 
                {
                "points": 2, 
                "spot": "west1", 
                "team": "STL", 
                "user": "sa"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "sa"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "sa"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "sa"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "sa"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "sa"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "sa"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "sa"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "sa"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "sae"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "sae"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "sae"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "sae"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "sae"
                }, 
                {
                "points": 0, 
                "spot": "e4", 
                "team": "CBJ", 
                "user": "sae"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "sae"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "sae"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "sae"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "sae"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "sddfssf"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "sddfssf"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "sddfssf"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "sddfssf"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "sddfssf"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "sddfssf"
                }, 
                {
                "points": 2, 
                "spot": "w1", 
                "team": "CHI", 
                "user": "sddfssf"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "sddfssf"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "sddfssf"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "sddfssf"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "sdfg"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "sdfg"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "sdfg"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "sdfg"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "sdfg"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "sdfg"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "sdfg"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "sdfg"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "sdfg"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "sdfg"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "sdgfsd"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "sdgfsd"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "sdgfsd"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "sdgfsd"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "sdgfsd"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "sdgfsd"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "sdgfsd"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "sdgfsd"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "sdgfsd"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "sdgfsd"
                }, 
                {
                "points": 2, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "ss"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "ss"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "test"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "test"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "test"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "test"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "test"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "test"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "test"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "test"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "test"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "test"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "TBL", 
                "user": "test2"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "test2"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "test2"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "test2"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "test2"
                }, 
                {
                "points": 0, 
                "spot": "e4", 
                "team": "CBJ", 
                "user": "test2"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "test2"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "test2"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "test2"
                }, 
                {
                "points": 0, 
                "spot": "w4", 
                "team": "WPG", 
                "user": "test2"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "test23"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "test23"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "test23"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "test23"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "test23"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "test23"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "test23"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "test23"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "test23"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "test23"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "tests"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "tests"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "tests"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "tests"
                }, 
                {
                "points": 0, 
                "spot": "e3", 
                "team": "NYI", 
                "user": "tests"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "tests"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "tests"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "tests"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "tests"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "tests"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "v"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "v"
                }, 
                {
                "points": 1, 
                "spot": "e1", 
                "team": "PIT", 
                "user": "v"
                }, 
                {
                "points": 1, 
                "spot": "e2", 
                "team": "CAR", 
                "user": "v"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "v"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "v"
                }, 
                {
                "points": 0, 
                "spot": "w1", 
                "team": "EDM", 
                "user": "v"
                }, 
                {
                "points": 0, 
                "spot": "w2", 
                "team": "ARI", 
                "user": "v"
                }, 
                {
                "points": 1, 
                "spot": "w3", 
                "team": "MIN", 
                "user": "v"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "v"
                }, 
                {
                "points": 0, 
                "spot": "east1", 
                "team": "BOS", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 0, 
                "spot": "west1", 
                "team": "STL", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 0, 
                "spot": "e1", 
                "team": "MTL", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 0, 
                "spot": "e2", 
                "team": "NYR", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 1, 
                "spot": "e3", 
                "team": "FLA", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 1, 
                "spot": "e4", 
                "team": "TOR", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 2, 
                "spot": "w1", 
                "team": "CHI", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 1, 
                "spot": "w2", 
                "team": "NSH", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 0, 
                "spot": "w3", 
                "team": "VAN", 
                "user": "vdvdvdv"
                }, 
                {
                "points": 1, 
                "spot": "w4", 
                "team": "CGY", 
                "user": "vdvdvdv"
                }
            ]
        }


@app.route('/api/get_teams', methods=["GET"])
def get_teams():
    print("Getting teams...")
    return {
        "teams": [
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
