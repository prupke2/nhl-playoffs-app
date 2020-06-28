import os
import pymysql.cursors
import config
import app

class DB(object):

	def __init__(self):
		self.connection = pymysql.connect(config.host, config.user, config.password, config.db, \
			charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
		self.cur = self.connection.cursor()

	def __del__(self):
		self.cur.close()
