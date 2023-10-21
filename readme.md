1. Init project and structure
2. Setup developer environment
3. Install express and nodemon
    - configure bodyparser
4. Add images and css in public folder

5. Add html files in views folder

6. Configure handlebars - Install express-handlebar
    - configure view engine
    - add main layout
    - fix hyperlinks
    - render homepage in hbs
    
7. Convert all html views to handlerbars (hbs) and group them by folders

8. Add controller folder with home controller
9. Add database
    - install mongoose
    - connect to db

10. Prepare user functionality
    - user controller
    - add controller to routes
    - fix navs
    - render login
    - render register

11. Add User model
    - simple validation in Schema
    - add method for register
    - create first User record
    - validate pass

12. Hash password
    - install bcrypt
    - hash password

13. Login
    -find user by email
    - validate password with hash

14. Generate jsonwebtoken
    - install jsonwebtoken
    - promisify jsonwebtoker
    - generate SECRET
    - generate token in service login

15. Return token in cookie