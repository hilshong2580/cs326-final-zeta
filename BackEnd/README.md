To start the backend process, we have to install several element

1. npm init -y
This use to set up the basic element for the environment

2. npm i express 
Install the Express.js for build the backend API

3. npm i pg
this is use to connect the postgres database

4. npm i cors

5. npm i nodemon
this is using to run the live server for test. it can skip to restart the server reply.


6. On package.json, add two more line to  "scripts"
  "scripts": {
    "test": " something in here", 
    "start": "node BackEnd/server.js",
    "nodemonStart": "nodemon BackEnd/server.js"
  },

use "npm run start" as general beginning by node
use "npm run nodemonStart" as test/coding style by nodemon

7. If you want to run or test the code locally, you have to install Postgres by https://www.postgresql.org/download/windows/
I suggest use the default user, and the password as "aa1234" that I used in secrets.json.
You also use your own password, then change the your secrets.json's password content.