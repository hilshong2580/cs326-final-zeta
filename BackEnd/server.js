//app.listen(process.env.PORT);


// create user table, Post table, activity table, favtable and comment table if not exist
createUserTable();
createPostTable();
createCommentTable();
	@@ -45,7 +45,7 @@ async function createUserTable() {
            email varchar(255) NOT NULL UNIQUE,
            phone varchar(255),
            about varchar(255)
        )`); //create table columns: uaserId, password, name, email, phone, about
    console.log("userTable created");

}
	@@ -63,7 +63,7 @@ async function createPostTable() {
            numOfPeople INT,
            description varchar(255),
            photo varchar(255)
        )`); //create table columns: postId, userId, title, destination, datetimestart/end, numOfPeople, description, photo
    console.log("postTable created");
}

	@@ -74,7 +74,7 @@ async function createCommentTable() {
    postId INT NOT NULL,
    name varchar(255) NOT NULL,
    comment varchar(255) NOT NULL
)`);     //create table columns:postId, name, comment
    console.log("commentTable created");
}

	@@ -85,7 +85,7 @@ async function createActivityTable() {
    favorite_Num INT NOT NULL,
    post_Num INT NOT NULL,
    comment_Num INT NOT NULL
)`); 
    console.log("activityTable created");
}
