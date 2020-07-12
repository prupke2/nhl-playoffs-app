import time
from flask import Flask
import pymysql.cursors
import os

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')
    
@app.route('/api/time')
def get_time():
    return {'time': time.time()}

@app.route('/api/save_byes', methods=["GET", "POST"])
def save_byes():
    return {"byes": "byes"}
