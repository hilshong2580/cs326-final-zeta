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

# Milestone3

## Documentation:Database implementation
___________________________________________________________________
As first required to do, we create the database to store all the data for our application.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createdatabase.png)

Then created tables with following codes (We create five table which are:userTable, postTable, commentTable, activityTable, favTable):
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/tables.png)

-For userTable:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/creatusertable.png)

-For postTable:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createposttable.png)

-For commentTable:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createcommenttable.png)

-For activityTable:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createactivitytable.png)

-For favTable：
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createfavtable.png)


So, they will create the tables in database as like this:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/tables.png)

The userTable contains password, name, email, phone and about as column names.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/usertable.png)

The postTable contains userId, title, destination, outset, dateTimeStart, dateTimeEnd, numOfPeople, description and photo as column names.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/posttable.png)

The commentTable contains postId, name and comment as column names.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/commenttable.png)

The favTable contains userid, postid, postTag as colums names.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/favtable.png)

The activityTable contains userId, favorite, post, comment as column names.
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/activitytable.png)

There are all the functions we use to perform Create, Read, Update and Delete operations on the Database:

-POST method route to get the user information once login in:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/getuserinfo.png)

-POST method for user to get favorites
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/postfav.png)

-GET method route to get all post
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/getpost.png)

-POST method for user to create a post
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createpost.png)

-PUT method route to update the post
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/putpost.png)

-DELETE method route for the post owner to delete the post
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/deletepost.png)

-Push the comment into correct postion comment column
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/pustcomment.png)

-PUT method route to get comments
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/getcomment.png)

-DELETE method route for the post owner to delete the comments
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/deletecomment.png)

-PUT method route to update user info
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/edituser.png)

-PUT method route to update activity
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/updateacti.png)

-POST method for user to add favorite
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/addfav.png)

-POST method for user to remove favorite
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/deletefav.png)

-POST method for check if is a fovorite
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/checkiffav.png)

-POST method to get activities
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/getac.png)

Then, we have a secrets.json file to store Local PostgreSQL credentials

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/credentials.png)

And then we have those functions to get into the PostgreSQL and the Heroku database:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/way.png)


## Deployment on Heroku
___________________________________________________________________

This is the link Deployed on Heroku: [https://u-car-326.herokuapp.com/]

## Division of labor

Tingshuo Miao: 
* Re-adjust the layout of main page-main.html
* Collect and analysis all the information and make Milestone3.md file.
* Group working on with connecting into heroku database.
* Create activityTable to record user activity if not exist on server.js when program start.
* Add method of POST: "/activity", to get the user activity record which include user's num of favorite, num of post, num of comment from database.
* Add method of PUT: "/activity", to update the user activity record on database when create post, add favorite post, push a comment in post.
* Create a method of updateActivity() with fetch to push the new record to Backend's mainRoute.js
* Create a method of getActivity() with fetch to get the user activity record from Backend's mainRoute.js
* Render the post owner activity record on post page that include the number of post owner created, num of comment owner push, num of favorite post owner followed.
* Re-build and add the favicon to the website.
* Add many comment above the methods to explain how to use, why it exist.
* Fix bug on the project.
* Assist teammate to write the project/code.
* Remove the not necessary html, js, folder from project.

Wai Kin Yu:
* Create new database table favTable if there are no such a table exists. That table will store all information for all the user and their liked post.
* Create end-point "/Fav" (post) for inserting data to favTable.
* Create end-point "/Fav" (del) for deleting data to favTable.
* Create end-point "/Fav" (put) for searching all data from favTable.
* Render "add to my favour"/"remove from my favour" button to each post.
* Create on-click listener to the button.
* Create addtoFav function on button which is the function for on-click listener on "add to my favour" button.
* Create DelFav function on button which is the function for on-click listener on "remove from my favour" button.
* Create checkFav function on button which check which button and it's corresponding function should be rendered.
* Implement end-point "/Fav" (post) to addtoFav function to fetch required data.
* Implement end-point "/Fav" (del) to DelFav function to fetch required data..
* Implement end-point "/Fav" (put) to checkFav function to fetch required data..
* Rerender "add to my favour"/"remove from my favour" button inside the post when user click the button.
* Render "my favour" button which display all the user's favour post.
* Create myFav.js which is used to implement the search and filter function for user's favour post.
* Create hideAll function to hide all the html element for all the post.
* Create getUserFav functino to show all the html element for user's favour post.
* Implement end-point "/Fav" (put) to getUserFav functino to fetch all favour post for the user who loged-in.
* Render "allPost" button which is used to show all the post.
* Create on-click listener to that button.
* Create allPostFunction which is the function for on-click listener on "allPost" button and show all the html element for the post.
* Group working on deploying on heroku with heroku database.

Shing Hong Lau:
1. Update README.md to add the necessary requirement pg for other classmate to set up the environment.
2. Create db.js file for connect the local postgres sql database.
3. Create secrets.js file to login in the local database, share the js file on Slack.
4. Update .gitignore file to add the secrets.js for the prevention of another classmate upload that file to Github.
5. For the loginRoute.js on Backend:
* Remove the fake data from loginRoute.js without any error because it is not necessary for mileStone3
* Remove all the not necessary methods of check such as user exists check, password check, login check etc.
* Update methods of POST: "/Registration", use the sql.query of INSERT to store account data to database instead of push account data to local json object's array.
* Update methods of POST: "/Account", use  the sql.query of SELECT to get username and password from database instead of use find function to get username and password from local json object's array.
6. For the mainRoute.js on Backend: 
* Remove the fake data of post info from mainRoute.js because it is not necessary for mileStone3
* Remove all the not necessary methods of check.
* Update the method of POST: "/UserInfo" with sql.query of SELECT to get user info from database
* Update the method of GET: "/" with sql sql.query of SELECT for getting all post data as json object.
* Update the method of POST: "/" with sql sql.query of INSERT for storage a new post data to database.
* Update the method of PUT: "/" with sql sql.query of UPDATE to edit exist post's content
* Update the method of DELETE: "/" with sql sql.query of DELETE to remove exist post from database
* Update the method of POST: "/comment" with sql sql.query of INSERT for storage user's comment with user id and post id.
* Update the method of PUT: "/comment" with sql sql.query of SELECT to get specific post comment.
* Update the method of DELETE: "/comment" with sql sql.query of DELETE to remove all of comment from a specific post when that post delete.
7. For the server.js on Backend:
* Use methods of createUserTable, createPostTable, createCommentTable when the server.js has been called.
* Create a method of createUserTable, this use to create userTable to store the user account info if table is not exist.
* Create a method of createPostTable, this use to create postTable to store the post info if table is not exist.
* Create a method of createCommentTable, this use to create commentTable to store the user comment in each post if table is not exist.
8. Update login.js, send the user id to main page when login successful.
9. Update regis.js, add an input column to store user name
10. For the main.js on Frontend:
* Update the method of "window.onload" to get the user id.
* Update the previous exist method of getUserInfo(), getRenderPost() editExistPost(), deleteExistPost(), postNewPost(), pushComment(), getComment(), deleteComment() the json object content's name should match to database's column name.
* Update the new fields of button on getRenderPost(), this user to expand the collapsed or collapse the expanded post.
11. Update the main.html, add a button of "toggleAll" to expand or collapse the post.
12. Update the db.js again, successfully using the connection method from Heroku.com to connect the Heroku's postgres database.
13. Update the main.css and post.css, Change the font design on post page to make the UI more comfortable.
14. Apply the heroku's postgres, set tup the environment data in HeroKu website.
15. Debug the program in this project, fix many bug.
16. Group working on project and help teammate solve problem.
