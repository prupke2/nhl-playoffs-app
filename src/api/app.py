import time
from flask import Flask
import pymysql.cursors
import os

app = Flask(__name__)

@app.route('/api/time')

def get_time():
    return {'time': time.time()}
