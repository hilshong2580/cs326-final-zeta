# Team Name
___________________________________________________________________
Team-zeta
## Application Name
U-Car
___________________________________________________________________

## Team member
- Wai Kin Yu
- Shing Hong Lau
- Tingshuo Miao

# Milestone2

## Part 0: Project API Planning
___________________________________________________________________

| End-Point                                            | data transfer:          | Use for:    |
| :-----:                                              | :----------:            | :-: |
| (Login)                                              |                         |     |
| router.post("/Account", function (req, res) {        | client to server        |  pass login email and password to server to check a valid account.|
|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/loginFE.PNG) |
| router.post("/Registration", function (req, res) {   | client to server        | pass registration data to server to create a user account.   |
|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/rigstFE.PNG) |![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/rigstBE.PNG) |
| (Main page)                                          |                         |     |
| router.post("/MainP", function (req, res) {          | client to server        | pass Post-Data(created by user) to server, then the server push the data to Post-Data and stored into the server. |
|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/createPostFE.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/createPostBE2.0.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/createPostFE2.0.PNG)|
| router.get("/MainG", function (req, res) {           | server  to client       | pass Post-Data to client, then client can rander and show the post     |
|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/getPostBE.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerPostFE.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerPostFE2.PNG)|
| router.put("/MainE", function (req, res) {           | client to server        | pass Post-Data(data edited by user) to server, then server update the corresponding Post-Data  |
|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/ed1.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/editPostFE.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/ed3.PNG)|
| router.delete("/MainD", function (req, res) {        | client to server        | pass Post ID and Email to server, then server delete the corresponding Post-Data     |
|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/editPostBE.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/deletePostFE.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/deletePostBE.PNG)|
| router.put("/MainComment", function (req, res) {     | client to server        | pass Post-Data and Comments(tpyed by user) to server, then server update the corresponding Post-Data |
|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/getPostBE.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/co1.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/co2.PNG)|
|router.post("/UserInfo", function (req, res) {|client to server| pass user email to server, then server send back the user information |
|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/loginFE.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/userInfo.PNG)|![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/userInfo2.PNG)|


## Part 1: Back-end Skeleton Code
___________________________________________________________________

When we connect to the server, the server will render 3 random fake data for post and 3 random fake data for user account from faker. Therefore, you can login with the 3 fake account. Also, before creating any post, there are already exist 3 post sent from the server.

- fake data user account:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerDataUserAccountBE.PNG)

- fake data post:

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerPostFE.PNG)

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerPostFE2.PNG)

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerPostBE.PNG)

## Part 2: Front-end Implementation
___________________________________________________________________

- Read post:  When login successfully, the main page will read Post-Data from the server and rander the post out.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerData1.0.PNG)
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerData1.2.PNG)


- Create post: When passing the Post-Data(created by user) to server, the server will push the data to Post-Data. After that, the main page will read Post-Data from the server and rander all the post out.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/createPost.PNG)
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/createPost1.PNG)

- Edit post: When passing the Post-Data(edited by user) to server, the server will change the data from Post-Data. After that, the main page will read Post-Data from the server and rander all the post out.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/editPost.PNG)
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/editPost1.PNG)

- Delete post: When passing the Post-Data to server, the server will delete the post from Post-Data. After that, the main page will read Post-Data from the server and rander all the post out.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/deletePost.PNG)
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/deletePost1.PNG)

- Adding Comment to post: When passing the Post-Data and comment to server, the server will change the data(comment part) from Post-Data. After that, the main page will read Post-Data from the server and rander all the post out.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/commentSubmit.PNG)
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/commentSubmit1.PNG)

- When clicking the user Info button, it will pop up a form and show the user information.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/userInfo.PNG)


- Search post: After typing the key words for search and enter the search button, the page will hide all other post except the posts that contain the key words.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/search.PNG)



## Part 3: Deployment
___________________________________________________________________

This is the link Deployed on Heroku: [https://u-car-326.herokuapp.com/]

## Division of labor

Tingshuo Miao: 
* Adjust login.html and regis.html
* Catch up with backend API

Shing Hong Lau:
* Fix bug from login.html and regis.html
* Create login.js file and write a function for button to fetch to do the login check
* Create regis.js file to write a function for button to fetch to do the account create
* Create main.js file to do the following methods:
1. window.onload: load the input url to storage username and email
2.  function: Logout: a button listener to clear local user data, then move back to login page
3. PUT: pushComment(): a button listener with an async function for update the new comment in a post
4. POST: postNewPost(): a button listener with an async function for create the new post
5. POST: getUserInfo(): a button listener with an async function for post user's email, then return the account information
6. PUT: editExistPost(): a button listener with an async function for edit the post data
7. Delete: deleteExistPost(): a button listener with an async function for delete the post data
8. GET: getRenderPost(): an async function for get all post the post data.
9. function: renderPost(): render the post to main page based on server's data. It include outset, time, date, delete & edit button etc.
10. function: renderComment(): render the server data's comment to post's page
11. function: renderForm(): render a modal form for edit button on post page

* create server.js to set up server, default the starting page, import the login and main router.

* create loginRouter.js to do the following work:
1. use fake data to generate json array for user account info
2. POST endpoint with "/Account" to find the specific exist user from json array
3. POST endpoint with "/Registration" to push new account json array
4. POST endpoint with "/UserInfo" to find the specific exist user, then return his/her data
5. function: checkRegist(): check the new user's email is exist or not
* create mainRouter.js to do the following work :
1. use fake data to generate json array for post data
2. POST endpoint with "/MainComment" to add comment to specific json object
3. POST endpoint with "/MainD" for the post owner to delete the post 
4. POST endpoint with "/MainP" for user to create a new account
5. POST endpoint with "/MainG" to get all post from json array
6. POST endpoint with "/MainE" for post owner can edit the post information
7. function: editJsonObj(), deleteJsonObj(), pushComment(): used on above API endpoint

* create README.md for another programmer set up environment

Wai Kin Yu:
* Collect and analysis all the information and make Milestone2.md file.
* Debug and remove part of warnings.
* Build up search function for main page.
* Create a rander create button, create form, edit button, edit form on main page.
* Debug and Deployed test on Heroku.




