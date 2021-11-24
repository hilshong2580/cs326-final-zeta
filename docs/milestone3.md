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

## Division of labor

Tingshuo Miao: 
* Re-adjust the layout of main page-main.html
* Collect and analysis all the information and make Milestone3.md file.
* Group working on with connecting into heroku database.
* Finish with building up activityTable with post, put, backend method.
* Build two fetch function to count the number of fav, post, comment. 
* Display the post owner activity record on post page
