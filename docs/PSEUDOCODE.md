# 23 Final Project: MERN Stack Single-Page Application

1.  Landing Page: Login or Signup. Username is email address.
    -Validation on email and password.
2.  Homepage: -Navbar: Logo, Profile, Logout
    -Current listing with photo
    -Button to look for matching listings
    -How will we match them on the backend?
    -Matching listing with photo which will render each time you click the search button above
    -Button to message seller
    -How will we implement messaging?
3.  Profile page: -View your user info  
     -View your listing history
    -View messages
4.  Click logout and user is taken back to the landing page.
5.  Incorporate JWT.
6.  Hosting: fly.io or something else other than Heroku.
7.  How will we connect the front end to the back end?

#Models:
-User: email, password, ref listings,
-Listing: name of item, photo, description, monetary value, owner--ref user, category--ref category
-Category: name

-User History: matches, transactions - Collection for Transaction History: array structure similar to the friends or reactions from social network api assignment. include:[]
