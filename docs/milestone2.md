# Team Name
___________________________________________________________________
Team-zeta
## Application Name
U-Car
___________________________________________________________________

## Team Overview
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
| router.post("/Registration", function (req, res) {   | client to server        | pass registration data to server to create a user account.   |
| (Main page)                                          |                         |     |
| router.post("/PostP", function (req, res) {          | client to server        | pass Post-Data(created by user) to server, then the server push the data to Post-Data and stored into the server. |
| router.get("/PostG", function (req, res) {           | server  to client       | pass Post-Data to client, then client can rander and show the post     |
| router.put("/PostE", function (req, res) {           | client to server        | pass Post-Data(data edited by user) to server, then server update the corresponding Post-Data  |
| router.delete("/PostD", function (req, res) {        | client to server        | pass Post ID and Email to server, then server delete the corresponding Post-Data     |
| router.put("/CommentText", function (req, res) {     | client to server        | pass Post-Data and Comments(tpyed by user) to server, then server update the corresponding Post-Data |


## Part 1: Back-end Skeleton Code
___________________________________________________________________

When we connect to the server, the server will render 3 random fake data from faker. Therefore, before creating any post, there are already exist 3 post sent from the server.

- fake data post:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerData1.0.PNG)

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot2/fakerData1.2.PNG)


## Part 2: Front-end Implementation
___________________________________________________________________





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




