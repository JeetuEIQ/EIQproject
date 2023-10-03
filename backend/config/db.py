
import psycopg2

from dotenv import load_dotenv
import os
load_dotenv()

def get_db_connection():
    return psycopg2.connect(database="income_tax", user="postgres",
                        password=os.get("DB_PASSWORD"), host="localhost", port="5432")
