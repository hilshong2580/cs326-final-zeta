# Team Name

Team-zeta

## Application Name

---

U-Car

## Semester

---

Fall 2021

## Overview

---

U-Car is a carpool website that can help Umass Amherst’s students who need to use a car or seek a partner. Students can post and search their requests, and the student’s driver can post the route with time, starting location, ending location. Also, they can discuss detail in the post. The data contain photos, descriptions, dates, comments, ratings, etc. The project ideas come from the daily needs for transportation and looking for some partners/friends so that makes more fun on the trip. We don’t want it to be just like Uber. Therefore, the trading object is totally depending on the users. It can be a story, a cup of coffee, or just cash, etc. Umass Amherst has a lot of international students and in-state students who do not have car or drive licenses. For example, students cannot purchase too many items in the market. Students cannot go to Boston to do personal things on weekends. Someone may say that can be solved by Uber. However, only a few Ubers exist in Amherst. It cannot go for the far trip. As a result, U-Car can solve the embarrassing situation.

## Team Members

---

- Wai Kin Yu
- Shing Hong Lau
- Tingshuo Miao

## User Interface

---

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

### Login:

| Endpoint            | Method |             Body              |                                                                                              Description                                                                                               |
| :------------------ | :----: | :---------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| /login/Registration |  POST  | New account info in json body | Add new user data to db with Encrypted password if input email is not exists. If success, add a new row to activity table by user id and redirect to login when success. Display error message if fail |
| /login/Account      |  POST  |        email, password        |                                                        Check account is exist, then check password. If true, redirect to home page with user id                                                        |

```json
//Registration
{
   "name": "userName",
   "password": "password",
   "email":"studentEmail@umass.edu",
   "about":"student's self-description",
   "phone":"1234567890"
}

//Account
{
   "email":"studentEmail@umass.edu",
   "password": "password"
}
```

### Main:

| Endpoint       | Method |              Body               |                   Description                   |
| :------------- | :----: | :-----------------------------: | :---------------------------------------------: |
| /main/         |  GET   |              Empty              |       Return all posts as a list from db        |
| /main/         |  POST  |    New post data (json body)    |        Create a new post and save in db         |
| /main/         |  PUT   |   Exist post data (json body)   |      Update a specific exist post content       |
| /main/         | DELETE |        User Id, Post Id         | Delete an exist post if user is the post owner  |
| /main/comment  |  POST  |     Post Id, name, comment      |        Add new comment in specific post         |
| /main/comment  |  PUT   |             Post Id             |   Return a list of Comment in a specific post   |
| /main/comment  | DELETE |             Post Id             |       Delete specific post's all comments       |
| /main/activity |  PUT   | favorite, post, comment, userId |         Update the user activity record         |
| /main/activity |  POST  |             User Id             |     Return a specific user activity record      |
| /main/UserInfo |  POST  |             User Id             |       Return user information by User Id        |
| /main/editUser |  PUT   | Exist account info (json body)  |       Update user information by User Id        |
| /main/UserFav  |  POST  |             User Id             |         Return user favorite post list          |
| /main/Fav      |  POST  |   User Id, Post Id, Post Tag    |        Add a post to user favorite table        |
| /main/Fav      | DELETE |        User Id, Post Id         | Remove a favorite post from user favorite table |
| /main/Fav      |  PUT   |        User Id, Post Id         |         Return the user's favorite post         |

```json
//main: POST
{
   "userId": 23,
   "title": "Go to somewhere on weekend",
   "destination":"Boston",
   "outset":"Umass Amherst",
   "dateTimeStart":"12-09-2021_09:30:00:AM",
   "dateTimeEnd":"12-11-2021_06:30:00:PM",
   "numOfPeople":3,
   "description":"I will go to Boston on weekend. Welcome to message me if interested.",
   "photo":"Post's photo"
}

//comment: POST
{
   "postId": 1,
   "name": "username",
   "comment": "this is comment"
}

//activity: PUT
{
   "userId": 6,
   "favorite": 2,
   "post": 1,
   "comment":3
}

//Fav: POST
{
   "userId": 6,
   "postid": 2,
   "postTag": "Post's title"
}
```

## Database

---

The project uses the Postgres SQL database. It generates and exists on heroku.com. In our project, we create five tables in the database that works for different features.

User Table:
| Column | Data Type | Description |
|:-------:|:---------:|:-----------:|
| userId | serial PRIMARY KEY| Unique auto increment user Id |
| salt | varchar(255) NOT NULL | Encrypted password |
| hash | varchar(255) NOT NULL | Encrypted password |
| name | varchar(255) | User's name |
| email | varchar(255) NOT NULL UNIQUE | User email as login credential |
| phone | varchar(255) | User's phone number |
| about | varchar(255) | User's self-description |

This table is used to store the user information when the user registers a new account. It contains a serial userId as the primary key, name, email, phone, self-description, secure password by salt & hash.

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/UserTable.png)

POST Table:
| Column | Data Type | Description |
|:-------:|:---------:|:-----------:|
| postId | serial PRIMARY KEY| Unique auto increment Post Id |
| userId | INT NOT NULL | User id as post owner |
| title | varchar(255) | Post's title |
| destination | varchar(255) | Post's target location |
| outset | varchar(255) | Post's start location |
| dateTimeStart | varchar(255) | Activity start time and day |
| dateTimeEnd | varchar(255) | Activity end time and day |
| numOfPeople | INT | Number of people in this activity |
| description | varchar(255) | activity's description |

This table is used to store new posts created by users. It contains a serial postId as the primary key, userId based on login user, and the purpose information.

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/PostTable.png)

Comment table
| Column | Data Type | Description |
|:-------:|:---------:|:-----------:|
| postId | INT NOT NULL | To specific a post |
| name | varchar(255) NOT NULL | The name that who add comment|
| comment | varchar(255) NOT NULL | The content of the comment |

This table is used to store the comment that is the conversation by a different user in a different post. It contains a postId based on the specific post that adds the comment, user's name and he/she's comments.

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/CommentTable.png)

Activity table
| Column | Data Type | Description |
|:-------:|:---------:|:-----------:|
| userId | INT PRIMARY KEY| User Id that can interact with user table |
| favorite_Num | INT NOT NULL | Total number of User's favorite post |
| post_Num | INT NOT NULL | Total number of User's created post |
| comment_Num | INT NOT NULL | Total number of User's comment in post |

This table is used to store the user's activity record. For example, the number of posts, number of comments, number of Favorite added. This data will save and display on the post. All users can see this record to measure the post's owner is reliable, or not. This table can be interacted with the user table by userId.

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/ActivityTable.png)

Favorite table
| Column | Data Type | Description |
|:-------|:---------:|:-----------:|
| userId | INT NOT NULL | To identify a user |
| postId | INT NOT NULL | To identify which post |
| postTag | varchar(255) NOT NULL | To record the post title for search |

This table is used to store the user's following post. Users can record some posts that they really like. Using the button to display the table record post and hide the not related post.

![alt text](https://github.com/hilshong2580/cs326-final-zeta/blob/main/docs/screenShot4/FavouriteTable.png)

## URL Routes/Mappings

---

|            URL            |                     Description                     |
| :-----------------------: | :-------------------------------------------------: |
|             /             |              The Start page for Login               |
|        /regis.html        |          Create a new user account's page           |
|        /login.html        |          Login after create account's page          |
| /main.html?userId={value} |                    The main page                    |
|          /main/           |      Main route to manipulate the data of post      |
|       /main/comment       | Comment route to manipulate user's comment in post  |
|      /main/activity       | Activity route to manipulate user's activity record |
|         /main/Fav         |  Favorite route to manipulate user's favorite post  |
|      /main/UserInfo       |   UserInfo route to manipulate user's information   |

## Authentication/Authorization

---

Used the miniCrypt from the class material which we can use .hash() function to make the password into hash and salt. Once an account is registered on the registration page. The password will turn into a hash value and a salt value. Then save them into the database. For the login page, the authorization is used for verifying the password. It will turn into the user inserted password into salt and hash and then compare them with the value in the database.

For existing Post content, Post's owner can change their posts by editing and deleting. To prevent another user to change the post owner's post, We will compare the post owner's id and login user's id. If the is matching, the button of delete and edit will appear. Otherwise, the button will disappear and another user cannot change it.


## Deployment
___________________________________________________________________

This is the link Deployed on Heroku: [https://u-car-326.herokuapp.com/]


## Rubric
___________________________________________________________________

Total: 100

innovative idea:(1)
different idea from other group: +1

user interface:(9)
built using HTML and CSS: +5
use of Bootstrap: +4

support a JavaScript-based server:(5)
Use of NodeJS backend(PostgreSQL): +5

CRUD (creation, reading, updating, and deletion) of data:(40)
Create post: +10
Reading post: +10
Updating post: +10
Delete post: +10

User interactivity(ability to interact with other users & include an element of in-place HTML modification:):(10)
add post comment in textarea of the post with different users: +5
users add to favourite post by userFav button which will change the number of favourite rating of post owner: +5

deployed to Heroku: (5)
successfully deploy to Heroku: +5


login/logout functionality:(10)
basic login/logout: +5
user authentication and authorization: +5

Five reasonable table on database:(10)
favTable： +2
activityTable: +2
commentTable: +2
postTable: +2
userTable: +2

Code Cleanup: (3)

Video Demo:(7)



## Division of Labor

---

Shing Hong Lau:

- Provide the idea of U-Car Project.
- Write the ideas.md content include Overview, Innovative Idea, Important Components, Data type
- Create team project repository on GitHub
- Create a wireframe for main page and create post page
- Design the CSS for Main page & create post page.
- Re-design the login.html and regis.html
- Create Frontend/regis.js file to write a POST methods to fetch the new user info to backend with button listener.

### Create **Frontend/login.js** to do the following methods:

1. write a POST methods to fetch the login json body to backend with button listener.
2. Update function can send the user id to main page when login successful.

### Create **Backend/server.js** to do the following methods:

1. Set up server and default the starting page as login.html.
2. Import the login and main router.
3. Use methods of createUserTable, createPostTable, createCommentTable when the server.js has been called.
4. Create a method of createUserTable, this use to create userTable to store the user account info if table is not exist.
5. Create a method of createPostTable, this use to create postTable to store the post info if table is not exist.
6. Create a method of createCommentTable, this use to create commentTable to store the user comment in each post if table is not exist.

### Create **Frontend/main.html** file to do the following methods:

1. Add a navbar that fixed on the website's top to contain the different function button.
2. Add a search input box with search button
3. Add a logout button to provide logout services
4. Add a create post page with the input data form for user create the new post
5. Add a collapsible card to render all user's post on main page
6. Add a button of "toggleAll" to expand or collapse the post.

### Create **Frontend/main.js** file to do the following methods:

**In MileStone 2**

|      Name       |  method  |                                  Description                                   |
| :-------------: | :------: | :----------------------------------------------------------------------------: |
|  window.onload  | function |             load the input url to storage the data from login page             |
|     Logout      | function |     clear local user data, then move back to login page by button listener     |
|   pushComment   |   PUT    |   an async function for update the new comment in a post by button listener    |
|   postNewPost   |   POST   |                   an async function for create the new post                    |
|   getUserInfo   |   POST   |  an async function for post user's email, then return the account information  |
|  editExistPost  |   PUT    |                    an async function for edit the post data                    |
| deleteExistPost |  DELETE  |                   an async function for delete the post data                   |
|  getRenderPost  |   GET    |                an async function for get all post the post data                |
|   renderPost    | function | render the post to main page based on server's data. It include all post data. |
|  renderComment  | function |                render the server data's comment to post's page                 |
|   renderForm    | function |    render a edit post modal form update the post content on each post page     |

**In MileStone 3**

1. Update the previous exist method of **getUserInfo(), getRenderPost(), editExistPost(), deleteExistPost(), postNewPost(), pushComment(), getComment(), deleteComment()** that the json object content's name should match to database's column name.
2. Update the new fields of button on getRenderPost(), this user to expand the collapsed or collapse the expanded post.

### Create **Backend/Route/loginRouter.js** to do the following work:

|      Endpoint      |  method  |                                      Description in MileStone 2                                      |
| :----------------: | :------: | :--------------------------------------------------------------------------------------------------: |
| **In MileStone 2** |          |             Use fake data to generate json array for user account info in local storage              |
|      /Account      |   POST   |              Find the user by email and check the password correct from local fake date              |
|   /Registration    |   POST   |                             Add the new account info to local json array                             |
|     /UserInfo      |   POST   |                  Find the specific exist user in local json array, then return data                  |
|    checkRegist     | function |                              check the new user's email is exist or not                              |
|       -----        |  -----   |                                                -----                                                 |
| **In MileStone 3** |          |                Remove the fake data and remove all the not necessary methods of check                |
|      /Account      |   POST   | A sql.query of SELECT to get username and password from Heroku database instead of local json array. |
|   /Registration    |   POST   | A sql.query of INSERT to store account data to Heroku database instead of local json object's array  |

### Create **Backend/Route/mainRouter.js** to do the following work:

|      Endpoint      |  method  |                                       Description                                       |
| :----------------: | :------: | :-------------------------------------------------------------------------------------: |
| **In MileStone 2** |          |           use fake data to generate json array for post data in local storage           |
|      /comment      |   POST   |                           add comment to specific json object                           |
|       /main        |  DELETE  |                          for the post owner to delete the post                          |
|       /main        |   POST   |                            for user to create a new account                             |
|       /main        |   GET    |                              get all post from json array                               |
|       /main        |   PUT    |                        post owner can edit the post information                         |
|    editJsonObj     | function |                             used on endpoint to update data                             |
|   deleteJsonObj    | function |                         used on endpoint to delete json object                          |
|    pushComment     | function |                     used on endpoint to add comment to json object                      |
|        ----        |   ----   |                                          ----                                           |
| **In MileStone 3** |          |         Remove the fake data and remove all the not necessary methods of check          |
|       /main        |  DELETE  |                 sql.query of DELETE to remove exist post from database                  |
|       /main        |   POST   |               sql.query of INSERT for storage a new post data to database               |
|       /main        |   GET    |              sql.query of SELECT for getting all post data as json object               |
|       /main        |   PUT    |                    sql.query of UPDATE to edit exist post's content                     |
|      /comment      |   POST   |         sql.query of INSERT for storage user's comment with user id and post id         |
|      /comment      |   PUT    |                    sql.query of SELECT to get specific post comment                     |
|      /comment      |  DELETE  | sql.query of DELETE to remove all of comment from a specific post when that post delete |
|     /UserInfo      |   POST   |                 Use sql.query of SELECT to get user info from database                  |
|   deleteJsonObj    | function |                         used on endpoint to delete json object                          |
|    pushComment     | function |                     used on endpoint to add comment to json object                      |

- create README.md for another programmer set up environment and Update README.md to add the necessary requirement pg for other classmate to set up the environment.
- update the css for main.html to adjust create post's button and user info's button position
- link project to Heroku and debug
- Add comment to all file's function to explain and increase the readability.
- Create db.js file for connect the local postgres sql database.
- Update the db.js again, successfully using the connection method to connect the Heroku's postgres database.
- Create secrets.js file to login in the local database, share the js file on Slack.
- Update .gitignore file to add the secrets.js for the prevention of another classmate upload that file to Github.
- Update the main.css and post.css, Change the font design on post page to make the UI more comfortable.
- Apply the heroku's postgres, set tup the environment data in HeroKu website.
- Debug the program in this project, fix many bug.
- Group working on project and help teammate solve problem.
- Remove the not necessary html, js, folder from project.
- Validation check to remove repeat ID and incorrect html format in login.html, regist.html and main.html
- Grammar check to rewrite the wrong word final.md file
- Complete the final.md file that contain API, Database, URL Route/Mapping and conclusion part.


Wai Kin Yu:

- Communicate with teamate, assembly information to keep track on the project/mileston1.md.
- Create Post detail in main page and UI design(part of CSS & HTML).
- Check and fix the bug with milestone 1 version.
- Create release milestone1.
- Collect and analysis all the information and make Milestone2.md file.
- Debug and remove part of warnings.
- Build up search function for main page.
- Filter all html element in title post with related search word.
- Create a rander create button, create form, edit button, edit form on main page.
- Debug and Deployed test on Heroku with milestone 2 version.
- Create release milestone2.
- Create new database table favTable if there are no such a table exists. That table will store all information for all the user and their liked post.
- Create end-point "/Fav" (post) for inserting data to favTable.
- Create end-point "/Fav" (del) for deleting data to favTable.
- Create end-point "/Fav" (put) for searching all data from favTable.
- Render "add to my favour"/"remove from my favour" button to each post.
- Create on-click listener to the button.
- Create addtoFav function on button which is the function for on-click listener on "add to my favour" button.
- Create DelFav function on button which is the function for on-click listener on "remove from my favour" button.
- Create checkFav function on button which check which button and it's corresponding function should be rendered.
- Implement end-point "/Fav" (post) to addtoFav function to fetch required data.
- Implement end-point "/Fav" (del) to DelFav function to fetch required data..
- Implement end-point "/Fav" (put) to checkFav function to fetch required data..
- Rerender "add to my favour"/"remove from my favour" button inside the post when user click the button.
- Render "my favour" button which display all the user's favour post.
- Create myFav.js which is used to implement the search and filter function for user's favour post.
- Create hideAll function to hide all the html element for all the post.
- Create getUserFav functino to show all the html element for user's favour post.
- Implement end-point "/Fav" (put) to getUserFav functino to fetch all favour post for the user who loged-in.
- Render "allPost" button which is used to show all the post.
- Create on-click listener to that button.
- Create allPostFunction which is the function for on-click listener on "allPost" button and show all the html element for the post.
- Add up to build filter.
- Group working on deploying on heroku with heroku database.
- Adjust CSS for All Post, My Favour Post, Toggle All Post, Creste Post button.
- Adjust milestone3.md and create release.
- Connect to both local database and heroku database.
- Clean up code.
- Reformatting all js file.
- Remove all unused and unnecessary code.
- Remove all unnecessary command and console log.
- Design rubric for final version.
- Help final debug.
- Create setup.md.
- Create final release version.

Tingshuo Miao:

- Create a wireframe for loginpage
- Create a wireframe for  registration page.
- Build CSS & HTML for login page.
- Build CSS & HTML forregistration page.
- Adjust login.html
- Adjust regis.html
- Catch up with backend API
- Re-adjust the layout of main page-main.html
   -The UserInfo bottom location.
   -The Create Post, Edit bottom's locations.
   -The All Post, Add to Myfacour bottom's locations.
   -Some more CSS details.
- Debug and remove part of warnings.
- Collect and analysis all the information and make Milestone3.md file.
- Group working on with connecting into heroku database.
- Create activityTable to record user activity if not exist on server.js when program start.
- Add method of POST: "/activity"
  -to get the user activity record which include user's num of favorite, num of post, num of comment from database.
- Add method of PUT: "/activity"
  -to update the user activity record on database when create post, add favorite post, push a comment in post.
- Create a method of updateActivity() with fetch to push the new record to Backend's mainRoute.js
- Create a method of getActivity() with fetch to get the user activity record from Backend's mainRoute.js
- Render the post owner activity record on post page that include the number of post owner created, num of comment owner push, num of favorite post owner followed.
- Re-build and add the favicon to the website.
- Add many comment above the methods to explain how to use, why it exist.
- Fix bug on the project.
- Assist teammate to write the project/code.
- Check and fix the bug with milestone 3 version.
- Clean up code.
- Remove unused and unnecessary code.
- Remove unnecessary command and console log.
- Modified the miniCrypt from the class lecture and add into the project.
- Build up the authentication for user's registration.
- Delete the password row in the database and create two new row- hash and salt.
- Update POST:/"Registration" in the loginRoutin with sql sql.query of INSERT.
- Update POST:/"Account" in the loginRoutin with sql sql.query of SELECT.
- Update createUserTable() method in the server.js for an adaptable database.
- Build up the authentication for login information which comparing with database data.
- Updated package.json file to set up the environment.
- Collect and analysis the information and make final.md file.
  -Build the Title, Subtitle, Semester, Overview, Team Members, User Interface, Authentication/Authorization sections.
  -Wrote all things, texts, descriptions as needed.
  -Collect and upload all the images as needed
  -Adjust some other sections.
- Working on deploying on heroku with heroku database.
- Update the heroku's postgres, set tup the environment data in HeroKu website.

## Conclusion

---

We learned about useful skills, knowledge, and experience based on the development of the project. We learned to consider the user's feelings to design the User Interface because it is an important element of user experience. To make sure the website is easy to understand, control, pretty, we use the same color tone and make the website simple, directly.

We tried to separate the workflow by n-tier architecture. This can make the code more clear and easier for the change or upgrade. However, teammates had trouble on catch up on the process. It is not enough time to complete it. So, the goals of n-tier architecture will be applied to future projects. Therefore, we got the experience to learn about setting the deadline in each period.

As the project aims to run in heroku.com, we design to use Postgres SQL as our database. It is able to install the Postgres SQL to test locally. We can learn about the skill on use the database. Also, update the database connection that can apply to the Heroku Postgres database perfectly.

In conclusion, this is a meaningful and excellent experience. At the same time, we realized the importance and enthusiasm of teamwork during the whole process. After all, everyone in the team has a different division of labor, so timely communication between team members can also make the progress of the project easier. We believe this expertience is a necessary process to become better engineers.
