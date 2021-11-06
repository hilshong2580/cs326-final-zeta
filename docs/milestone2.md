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
* 
* 

Shing Hong Lau:
* 
* 

Wai Kin Yu:
* 
* 
* 




