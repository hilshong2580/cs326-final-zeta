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
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createDatabase.PNG)

Then created tables with following codes (We create five table which are:userTable, postTable, commentTable, activityTable, favTable):

-For userTable:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/creatusertable.PNG)

-For postTable:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createposttable.PNG)

-For commentTable:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createcommenttable.PNG)

-For activityTable:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createactivitytable.PNG)

-For favTable：
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createfavtable.PNG)


So, they will create the tables in database as like this:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/tables.PNG)

There are all the functions we use to perform Create, Read, Update and Delete operations on the Database:

-POST method route to get the user information once login in:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/getuserinfo.PNG)

-POST method for user to get favorites
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/postfav.PNG)

-GET method route to get all post
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/getpost.PNG)

-POST method for user to create a post
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/createpost.PNG)

-PUT method route to update the post
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/putpost.PNG)

-DELETE method route for the post owner to delete the post
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/deletepost.PNG)

-Push the comment into correct postion comment column
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/pustcomment.PNG)

-PUT method route to get comments
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/getcomment.PNG)

-DELETE method route for the post owner to delete the comments
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/deletecomment.PNG)

-PUT method route to update user info
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/edituser.PNG)

-PUT method route to update activity
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/updateacti.PNG)

-POST method for user to add favorite
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/addfav.PNG)

-POST method for user to remove favorite
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/deletefav.PNG)

-POST method for check if is a fovorite
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/checkiffav.PNG)

-POST method to get activities
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/getac.PNG)

Then, we have a secrets.json file to store Local PostgreSQL credentials
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/credentials.PNG)

And then we have those functions to get into the PostgreSQL and the Heroku database:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot3/way.PNG)
