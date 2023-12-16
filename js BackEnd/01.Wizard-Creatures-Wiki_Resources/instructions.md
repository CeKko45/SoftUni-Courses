1. Initialize project and structure
2. Setup developer environment
3. install express, express-handlebars and nodemon
   - configure bodyparser
   - configure static middleware
   - configure routes
4. Add images and css in public directory
5. Add html files it views directory
6. Configure view engine
   - add main layout
   - fix public styles hyperlinks
   - render home page in hbs
7. Convert all html views to handlebars view
   - Group views by subject
8. Add controller folder with home controller
9. Add database
   - instal mongoose
   - connect to db
10. Prepare user functionality

- user controller
- add controleer to routes
- fix navigations in nav bar (login, register, logout)
- render login page
- render register page

11. Add User model

- simple validation in Schema
- add method for register
- create first User record in the db
- check if repeat pass is correct

12. Hash password

- instal bcrypt
- hash password

13. Login

- find user by email
- validate pass by hash

14. Generate JWT

- instal jsonwebtoken
- promisify jsonwebtoken
- generate secret
- generate token in login service

15. Return token in cookie

- instal cookie-parser
- configure cookie-parser
- set cookie with the token

16. Implement logout
17. Authentication middleware

- create middleware directory

- add auth middleware and import it in express config below cookieParse
- decode the token
- handle invalid token
- provide authorization

18. Dynamic navigation

- conditional options in navigation
- add user and data to res.locals for template

19. Error handling

- add 404 page
- redirect wrong route to 404
- add global error handler(optional)
- add error message util

20. Show error notification

- show in main layout
- pass error to render in login and register pages

21. Automatic login after register
22. Map pages to nav in both loged in and loged out states
23. Add crature model to mongoose
24. Implement - all posts page

- show each creature with image, name, species, description
- add details button to every creature post

25. Add details page (for Creatures)

- If no creatures "There are no posts yet"
- If user is the owner of the post show "Edit" and "Delete" buttons
- If the user is not logged in show no buttons
- If user is not the owner show vote button

26. Vote button

- when clicked "Voted"
- redirect to the details page of the current creature
- show email of the people who voted
- if user has already voted "Thanks for voting" and add the email to the list of voters

27. Add creature

- on success redirect to all posts page

28. Delete Creature

- on success redirect to all posts page

29. Edit creature

- on sccess redirect to current creature post

30. Routes Guards - check
31. Validations

- Login
- Register
- Animals

32. Bonus Profile

- show my posts
- if there are no posts show message
