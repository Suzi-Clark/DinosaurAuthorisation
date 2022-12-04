COMPLETED DURING FRIDAY'S HACKATHON:
- install react and set up App.js ✅
- install Auth0 ✅
- create login component button ✅
- create logout button component ✅
- if logged in show main page component - (dinosaur pictures) ✅
- change favicon and title of app ✅
- install React Router DOM and use it to link to a user details component as if it is another web page ✅
- make it so if you click on user image it renders a 'page' with the users's data on ✅
- some basic CSS ✅
- create a 'back' button that takes you back to the 'home page' ✅
- show the user an image based on reading their favourite dinosaur hard coded metadata ❓

🦕 🦖 PERSONAL PROJECT CONTINUATION:
MVP:
- Fix user image based on fave dino feature that broke right before we presented ✅
- update the Auht0 domain and client id etc, info to link to my an application in my Auth0 account instead of partners ✅
- style and change message on log in widget on my Auth0
- refactor to ensure careful use of logical &&s to avoid the possibility of 0 ever being accidentally rendered - challenge myself to try to replace all of them with ternaries, switch statements or if/elseor other methods listed here https://reactjs.org/docs/conditional-rendering.html (even though some of the might be fine) ✅
- refactor login and log out buttons into one component ✅
- refactor and add to login and logout button css ✅
- refactor react components to put user metadata in App.js so it can be easily passed to MainPage, UserDetails and UpdateDetails
- have a PUT/PATCH/POST request to update user details and add in new metadata with the UpdateDetails form (favourite colour, favourite dino, nickname)
- limit dinosaur and colour choices with radio boxes
- ensure the updated data shows on the userDetails
- have these 2 components rendered side by side on the profile 'page'

STRETCH GOALS:
- create 2 different authority levels with secret dino images that can only be seen by 'administrator' users with higher priviliges
- create the possibility for users to increase their access level to administrator by answering a dinosaur knowledge question?
- improve main page CSS
- only show dinosaurs in users favourite colour on main page (if they have added one)