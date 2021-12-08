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

U-Car is a carpool website that can help Umass Amherst’s students who need to use a car or seek a partner. Students can post and search their requests, and the student’s driver can post the route with time, starting location, ending location. Also, they can discuss detail in the post. The data contain photos, descriptions, dates, comments, ratings, etc.
The project ideas come from the daily needs for transportation and looking for some partners/friends so that making more fun on the trip. We don’t want it is just like the Uber. Therefore, the trading object is totally depending on the users. It can be a story, a cup of coffee or just cash, etc. Umass Amherst has a lot of international students and in-state students who do not have car or drive licenses.  For example, students cannot purchase too many items in the market. Students cannot go to Boston to do personal things on weekends. Someone may say that can be solved by Uber. However, only a few Ubers exist in Amherst. It cannot go for the far trip. As a result, U-Car can solve the embarrassing situation.

## Team Members
___________________________________________________________________
- Wai Kin Yu
- Shing Hong Lau
- Tingshuo Miao

## User Interface
___________________________________________________________________
- Login Page: This is a login page which needs two values to be inserted - Email and Password. Once click on the login buttom on the left side with the condotions that email and the password math the data in database, it will lead the page into main page. Otherwise, stays on the same page. Or the user can click on the "No account? Sign up!" which will lead the user into the registration page.
  ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/login.png)
  
 - Registration Page: This page is where user registes their own account. Here the user needs to enter six values -Email, Password, Confirm Password, Phone, About. The account will be registed if and only if the email that the user entered does not exist in the database. And the password must equal with the confirm password. Once click on the registration buttom, all the data will be added into the database and lead the page into login page. Or click on "Already have a account? Login!" which will lead the user to thte login page if the user has an account.
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/regis.png)

- Main Page: This is the main page for the user after logging in. There is a search bar above the page which let the users to seach for the keywords as they want after clicking on the search bottom. Two bottoms on the right side of the page. Clicking with User Info bottom will jump out a page which shows the user informamtion, clicking on the Log Out bottom will log out the user and lead the user to the login page. And there are four bottoms below the search bar. Clicking on the All post will show all posts to the user. Clicking on My Favour Post will show user's favour post. Toggle All post will toggle all posts. Clicking on create Post will jump out a create post page which needs the user to insert all the information as needed.
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/main.png)

- Create Post Page: This page will jump out after clicking the Create Post buttom in the main page. User needs to insert title, Destination, Outset, Time: Start, Time: End, Num of people, Description in this page. And clicking on the Save the changes bottom at the end of the page will create a post which save all the infomation that the user inserted into the database. Meanwhile, a new post will be created and showed in the main page. Clicking on the Close bottom will jumo out of the Create Post Page and be back to the main page.
  ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/create.png)

-Post Page: This page will show all the information that the user entered in the create post page like the title, Destination, Outset, Time: Start, Time: End, Num of people, Description. The tile will be on the top-left corner. And the other will be in obivous positions. There are three bottoms on the right side corner. The Add to favour will mark the post as the user's favour post and save into the database. The Delete Post will delete the post form the main page and the database. The Edit Bottom will allow the user to eidt the posted post. There is a bottom part about comment at the end of the page. User can insert the comment into the box and click on the Submit bottom to submit the comment and the comment will show up with user name who wrote the comment.
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/post.png)
   
- Comment Example:
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/comment.png)
   
-UserInfo Page: This page will show the informations of the user only after logging in. It will show the Email, Phone, Name, and About. There is an edit bottom allows the user to edit the user's information.
   ![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/user.png)
   
## Authentication/Authorization
___________________________________________________________________
-Used the miniCrypt from the class material which we can use .hash() function to make the password into hash and salt. Once an account is registed in the reagistration page. The password will turn into a hash value and a salt value. Then save them into the database. For login page, the authorization is used for veryfing yhe password. It will turn into the user inserted password into salt and hash and then compare them with the value in the database.

## Division of Labor
___________________________________________________________________
Wai Kin Yu:
* Communicate with teamate, assembly information to keep track on the project/mileston1.md.
* Create Post detail in main page and UI design(part of CSS & HTML).
* Check and fix the bug with milestone 1 version.
* Create release milestone1.
* Collect and analysis all the information and make Milestone2.md file.
* Debug and remove part of warnings.
* Build up search function for main page.
* Filter all html element in title post with related search word.
* Create a rander create button, create form, edit button, edit form on main page.
* Debug and Deployed test on Heroku with milestone 2 version.
* Create release milestone2.
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
* Add up to build filter.
* Group working on deploying on heroku with heroku database.
* Adjust CSS for All Post, My Favour Post, Toggle All Post, Creste Post button.
* Adjust milestone3.md and create release.
* Connect to both local database and heroku database.
* Clean up code.
* Reformatting all js file.
* Remove all unused and unnecessary code.
* Remove all unnecessary command and console log.
* Design rubric for final version.
