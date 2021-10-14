# Project 1 Documentation
## by Nathan Noack


## Introduction
Welcome to my first full-fledged web development project!\
\
[See working site here!](https://seir-penguin-project-1-roan.vercel.app)\
\
This JavaScript-based, 2-player, turn-taking trivia game allows players to compete in the Science trivia category with randomized questions and shows players scores as they play throughout the game.


## Technologies Used
#### Basic
 - HTML5
 - CSS3
 - JavaScript ES6

 #### Libraries / Techniques
 - jQuery / AJAX
 - Mobile-first responsive styling
 - CSS Animations
 - Deployed with Vercel
 - Using Contentful as the headless CMS for the backend


## General Plan of Action
1. Get data about Trivia questions and answers and read Contentful API docs to gain access
2. Set up a mock wireframe for the barebones skeleton look of the web page
3. Implement basic functionality of the game
4. Add styling for mobile and desktop
5. Clean up code
6. Add extra features


## Timeline
#### Day 0:
 - Create boilerplate code for index.html, styles.css, app.js locally using VSCode
 - Sign up for Vercel and host relevant GitHub repo linked to local git repo
 - Sign up for Contentful to host headless CMS for backend data-fetching
 - Creating Trivia questions/answers and loading them into Contentful database
 - Testing connection

#### Day 1:
 - Finished Minimum Viable Product of the game
 - Added some desktop styling as well as styling for specific mobile devices that give trouble (looking at you, iPhone 5)

 #### Day 2:
 - This was a fun day, full of building CSS animations, like hovering over an answer button for a 3d effect and making the winning player score twist about in a victory dance.

 #### Day 3:
 - Fully functioning modal implemented at end of the game, appending the "game over" notification and reset button
 - Cleaning up code as much as possible to simplify future devs reading this


## Challenges
#### I had trouble with...
- Noticing code that needs improvement, then noticing something else that should be improved, etc etc ad naseum\
 The solution: make a quick, physical note of what needs improving, but don't lose your focus on the current problem at hand.

 - Making a complete product without knowing what features to implement, then adding on features which required me to spend several hours debugging and refactoring\
 The solution: Next time, at the start of a project, have a full game-plan with all proposed features included so I can program to fit those features from the start, instead of Frankenstein-ing them in at the end.

- Adding multiple event listeners
 ```js
$("li").on("click", e => {
  chooseAnswer(e, randomQuestion);
});
 ```
 until I added the jQuery off function that deletes any listeners being attached to DOM nodes with a simple function
 ```js
$("li").off();
 ```
 - Truly randomizing and using the .pop() method to remove questions as the players are playing\
 The solution: create a copy of the questions and answers array to reuse once the game is reset\

 - CSS styling for most mobile devices found on Chrome DevTools. This took painstakingly slow incremental changes to see whether the game looked good or not. I've gained a lot more appreciation for CSS after reading through MDN docs now...

## Conclusion
Overall, this was a great opportunity to stretch my Front-End developer knowledge and gain experience with the common pitfalls of maintaining and organizing a real-world project. Before now, I've never appreciated the core tenets of KISS, staying organized and keeping the code as simple as possible while maintaining the desired output.\
After this project, I've got to say I'm more excited than ever to learn!
