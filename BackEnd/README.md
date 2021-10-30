To start the backend process, we have to install several element
1. npm init -y
This use to set up the basic element for the environment

2. npm i express
Install the Express.js for the project

3. npm i faker
install the fake data 

4. npm i --save-dev nodemon
install the live server for server.js
You can change the package.json 
  "scripts": {
    "test": " something in here"
  },
  =>
    "scripts": {
    "serverStart": "nodemon server.js"
  },