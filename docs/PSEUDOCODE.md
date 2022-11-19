# 23 Final Project: MERN Stack Single-Page Application

1.  Landing Page: Login or Signup. Username is email address.
    -Validation on email and password.
2.  Homepage: -Navbar: Logo, Profile, Logout
    -Current listing with photo
    -Button to look for matching listings
    -Matching listing with photo which will obviously change as you click the search button above
    -Button to message seller
3.  Profile page: -View your user info  
     -View your listing history
    -View messages
4.  Click logout and user is taken back to the landing page.

Models:
-User: email, password, ref listings
-Listing: photo, description, monetary value, owner--ref user
-Message: text, ref user

<!-- -User History: matches, transactions -->
