$install dependencies :
[1] Dependencies

> express (npm i express)
> EJS (npm i ejs) : For server side rendering
> mongoose (npm i mongoose) : For connecting with mongo DB
> JWT(jsonwebtoken) (npm i jsonwebtoken) : for authentication

[2] dev Dependencies

> nodemon (npm i nodemon)

$models :
[1] user.js :

> designing the schema for the user
> for hasing purpose we will use crypto(built-in) module
> used crypto module (pre) to save the password in hashed manner using salt
> coded a function for checking the password

[2] comment.js

> designing the model for comment

[3] blog.js

> designing the model for blog

$routes :
[1] user.js :

> made routes for GET signin, GET signup, POST signup, POST signin

[2] blog.js :

> require the router from express(for routing purpose)
> require the multer for storing the files on local storage
> make GET request on '/blog/add-new' to make new blogs
> make GET request on '/blog/:id', getting the required blog and getting all the comments which of the post/blog and then render the blog page.
> POST request on '/blog/comment/:blogId' to create new comment for the post/blog
> POST request to create a blog

$views :

> [1] partials :

> it stored the common component used in application , i.e navbar, links, scripts

[2] Global :

> design the homepage, signin, signup page UI

$middlewares :

[1]auth.js :

> this component checks for cookie for authentication.

$services :

[1] auth.js

> created verifiaction component which verify using JWT
