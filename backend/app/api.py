from fastapi import FastAPI,APIRouter, Depends, HTTPException, status
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from starlette.requests import Request
import tokenlib
# from authentication import create_access_token, SESSION_COOKIE_NAME
from fastapi_sso.sso.google import GoogleSSO
from fastapi_sso.sso.base import OpenID
import json
from dotenv import load_dotenv
from pathlib import Path
import os
import psycopg2


load_dotenv()


db = psycopg2.connect(database="income_tax", user="postgres",
                        password=os.getenv("DB_PASSWORD"), host="127.0.0.1", port="5432")

openid_instance = OpenID()
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

google_sso = GoogleSSO(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET, 
    "http://localhost:5000/auth/google/callback",
    allow_insecure_http=True,
    scope=["profile", "email"]
)



@app.get("/auth/google", tags=["Google SSO"])
async def google_login():
    print("IN LOGIN")
    return await google_sso.get_login_redirect(params={"prompt": "consent", "access_type": "offline"})


@app.get("/auth/google/callback", tags=["Google SSO"])
async def google_callback(request: Request):
    """Process login response from Google and return user info"""

    try:
        user = await google_sso.verify_and_process(request)
        # user_stored = db_crud.get_user(db, user.email, provider=user.provider)
        access_token = tokenlib.make_token({"userid": user.id}, secret="I_LIKE_UNICORNS")
        # access_token = create_access_token(username=user.name, provider=user.provider)
        openid_dict = user.__dict__

        # Serialize the dictionary to a JSON string
        json_payload = json.dumps(openid_dict)

        # openid_dict.email = email
        email = user.email
        curr = db.cursor()
        print("HERE 1: ")
        query = "SELECT * from register_user_sso where email = %s"
        curr.execute(query, (email, ))
        print("HERE 2 : ")
        rows = curr.fetchone()
        print("ROWS : ", rows)
        if (rows == None):
            response = RedirectResponse(url=f"http://localhost:3000/failure", status_code=status.HTTP_302_FOUND) 
            return response

        db_data = {}
        for ind, item in enumerate(rows):
            if ind == 0:
                db_data['id'] = item
            elif ind == 1:
                db_data['email'] = item
            else:
                db_data['role'] = item
        # rows = "RANDOM"
        print("This is the data : ", json_payload)
        db_data_str = json.dumps(db_data)
        curr.close()
        if (len(rows) > 0):
            response = RedirectResponse(url=f"http://localhost:3000/success?db_data={db_data_str}&data={json_payload}", status_code=status.HTTP_302_FOUND)
            SESSION_COOKIE_NAME = "my_session_cookie"
            response.set_cookie(SESSION_COOKIE_NAME, access_token)            
        else :
            response = RedirectResponse(url=f"http://localhost:3000", status_code=status.HTTP_404_NOT_FOUND)
        return response
        # print("Open ID Paylod : ", json_payload)
        # print("uSer IF : ",user.id)
        # print(type(user))
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"An unexpected error occurred. Report this message to support: {e}")
    

    # with google_sso:
    #     user = await google_sso.verify_and_process(request)
    # return {
    #     "id": user.id,
    #     "picture": user.picture,
    #     "display_name": user.display_name,
    #     "email": user.email,
    #     "provider": user.provider,
    # }


# main code starts from here

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}

# @app.get("/auth/google", tags=["google_login"])
# async def google_login() -> dict:
