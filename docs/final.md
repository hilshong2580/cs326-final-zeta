# Team Name
Team-zeta
___________________________________________________________________
## Application Name
U-Car
___________________________________________________________________
## Semester
Fall 2021
___________________________________________________________________

## Overview
___________________________________________________________________

U-Car is a carpool website that can help Umass Amherst’s students who need to use a car or seek a partner. Students can post and search their requests, and the student’s driver can post the route with time, starting location, ending location. Also, they can discuss detail in the post. The data contain photos, descriptions, dates, comments, ratings, etc. The project ideas come from the daily needs for transportation and looking for some partners/friends so that makes more fun on the trip. We don’t want it to be just like Uber. Therefore, the trading object is totally depending on the users. It can be a story, a cup of coffee, or just cash, etc. Umass Amherst has a lot of international students and in-state students who do not have car or drive licenses. For example, students cannot purchase too many items in the market. Students cannot go to Boston to do personal things on weekends. Someone may say that can be solved by Uber. However, only a few Ubers exist in Amherst. It cannot go for the far trip. As a result, U-Car can solve the embarrassing situation.

## Team Members
___________________________________________________________________
- Wai Kin Yu
- Shing Hong Lau
- Tingshuo Miao

## User Interface
___________________________________________________________________
- Login Page: This is a login page that needs two values to be inserted - Email and Password. Once click on the login button on the left side with the conditions that email and the password math the data in the database, it will lead the page into the main page. Otherwise, stays on the same page. Or the user can click on the "No account? Sign up!" which will lead the user into the registration page.
  ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/login.png)
  
 - Registration Page: This page is where user registers their own account. Here the user needs to enter six values -Email, Password, Confirm Password, Phone, About. The account will be registered if and only if the email that the user entered does not exist in the database. And the password must be equal to the confirmed password. Also, the phone number should be in the correct format as a number, and the length should be 10. If one of the above cases happens, it will show an alert to remind enter the correct format. Once click on the registration button, all the data will be added to the database and direct the page into the login page. Or click on "Already have an account? Login!" which will lead the user to the login page if the user has an account.
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/regis.png)

- Main Page: This is the main page for the user after logging in. There is a search bar above the page that lets the users search for the keywords as they want after clicking on the search bottom. Two bottoms on the right side of the page. Clicking with User Info bottom will jump out a page that shows the user information, clicking on the Log Out bottom will log out the user and lead the user to the login page. And there are four bottoms below the search bar. Clicking on the All post will show all posts to the user. Clicking on My Favour Post will show the user's favorite post. Toggle All posts will toggle all posts. Clicking on create Post will jump out a create post page which needs the user to insert all the information as needed.
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/main.png)

- Create Post Page: This page will jump out after clicking the Create Post button on the main page. User needs to insert title, Destination, Outset, Time: Start, Time: End, Num of people, Description in this page. And clicking on the Save Changes bottom at the end of the page will create a post that saves all the information that the user inserted into the database. Meanwhile, a new post will be created and shown on the main page. Clicking on the Close bottom will jump out of the Create Post Page and be back to the main page.
  ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/create.png)

- Post Page: This page will show all the information that the user entered in the create post page like the title, Destination, Outset, Time: Start, Time: End, Num of people, Description. The tile will be on the top-left corner. And the other will be in obvious positions. There are three bottoms on the right side corner. The Add to favor will mark the post as the user's favorite post and save it into the database. The Delete Post will delete the posting from the main page and the database. The Edit Bottom will allow the user to edit the posted post. There is a bottom part about comments at the end of the page. Users can insert the comment into the box and click on the Submit bottom to submit the comment and the comment will show up with the user name who wrote the comment.
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/post.png)
   
- Comment Example:
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/comment.png)
   
- UserInfo Page: This page will show the information of the user only after logging in. It will show the Email, Phone, Name, and About. There is an edit bottom that allows the user to edit the user's information.
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/user.png)

## APIs
___________________________________________________________________

## Database
___________________________________________________________________
The project uses the Postgres SQL database. It generates and exists on heroku.com. In our project, we create five tables in the database that works for different features.

- user table: This table is used to store the user information when the user registers a new account. It contains a serial userId as the primary key, name, email, phone, self-description,  secure password by salt & hash. 
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/UserTable.png)

- post table:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/PostTable.png)

- Comment table:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/CommentTable.png)

- Activity table:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/ActivityTable.png)

- Favorite table:
![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/FavouriteTable.png)

## URL Routes/Mappings
___________________________________________________________________
   
## Authentication/Authorization
___________________________________________________________________
- Used the miniCrypt from the class material which we can use .hash() function to make the password into hash and salt. Once an account is registered on the registration page. The password will turn into a hash value and a salt value. Then save them into the database. For the login page, the authorization is used for verifying the password. It will turn into the user inserted password into salt and hash and then compare them with the value in the database.
