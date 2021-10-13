# Project 1 Documentation
## by Nathan Noack


## Introduction
Welcome to my first full-fledged web development project!\
\
[See working site here!](https://seir-penguin-project-1-roan.vercel.app)\
\
This JavaScript-based turn-taking trivia game allows players to compete in the Science trivia category with randomized questions and shows players scores as they play throughout the game.\
\
This is the first project administered in General Assembly's Software Engineering Immersive bootcamp, which uses the Front-End web development technologies listed below.


## Technologies Used
#### Basic
 - HTML5
 - CSS3
 - JavaScript ES6

 #### Libraries / Techniques
 - jQuery
 - Mobile-first
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
 - Added some desktop styling


## Challenges
#### I had trouble with...

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
 - Truly randomizing and using the .pop() method to 



#### Example Table
| Column1 | Column 2 |
| ------- | -------- |
| yadda1  | yadda2   |