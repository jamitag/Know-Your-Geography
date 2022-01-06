# Know Your Geography

## Welcome - [Know Your Geography](https://jamitag.github.io/Know-Your-Geography/)
This interactive game is designed for quiz lovers and geography enthusiasts alike. The questions are at beginner level and targets children of high school age - although adults are more than welcome to test themselves!
Users of the website will be able to smoothly and easily navigate through the game, with an active score counter informing them of their progress.

 <img src="assets/images/amiresponsive.png">

## Features

### Existing Features

- __Heading__
A simple header with the game title appears at the top of the page and remains throughout.

- __Background__
A background image relating to the game subject sits visable throughout the game. 

- __Play Game__
The game is viewed and played within a small card. To begin, the user is greeted with a play button which when pressed will begin the game.

- __Game__
A question with four options will be presented to the user. They will select one answer only before clicking 'Next'.

- __Score Counter__
A running total of the users score sits beneath the game area allowing the user to sese if they got the question right.

- __Result alert__
User is notified of their overall score at end of game informing the user if they have passed or failed

### Features to add

- __Multiple difficulty levels__

- __Additional quiz games to build the 'Know Your...' series(sport, history etc)__

- __Fun animation when selecting correct answer__

## Technologies

### Editor
- GitPod

### Languages
- HTML5
- CSS3
- JacaScript


### Version control
- GitHub


### Libraries
- Font Awesome
- Google Fonts
- Stock Images

## Testing

### Validator Testing

__HTML__

The index.html page was tested using the [W3C HTML validation service](https://validator.w3.org/nu/) and no errors where discovered.

__CSS__

The style.css file was tested using the [W3C CSS validation service](https://jigsaw.w3.org/css-validator/) and no errors where discovered.

__JavaScript__

The script.js file was tested using [JSHint](https://jshint.com/) and no errors where found. There where 6 unused variables identified due to no reference within the JS file itself however these are utilized within the HTML file to provide functionality.

## Feature Testing

Various functions and features where tested across browsers and devices. These include;

- LinkLink to hompage working.
- Buttons prompt expected response.
- Correct answers are in fact correct.
- Hover function works when hovered over buttons.
- Score counter functions as expected when answering questions.
- Relevant result page displays depending on result.

### Responsiveness

The quiz is designed to be responsive across multiple devices of varying screen sizes and was tested on;

- MacBook - 1280 x 1200
- iPad	- 768 x 1024
- iPhone 6/7/8 - 375 x 667

### Bugs

- <b>Issue</b>
The nextQuestion function would not iterate through the questionArray to display the questions.

- <b>Solution</b>
Many attempts where made to change the relavant statement to no avail. After some time, it was discovered that the syntax within the array itself was faulty and was promptly fixed. The style of the array was derived from the 'Display Quiz Questions' section of this [Link](https://www.sitepoint.com/simple-javascript-quiz/).

- <b>Issue</b>
The clickable buttons on the homepage appear to have some styling around the top edges which cannot be removed using 'text-decoration: none;'.

- <b>Solution</b>
This issue remains however, has no impact on the flow of the game or user experience.

- <b>Issue</b>
When I applied an anchor tag to the header, there was a purple line beneath the text that wouldn't disappear using 'text-decoration: none'.

- <b>Solution</b>
I used a solution from a comment found [here](https://stackoverflow.com/questions/2789703/remove-blue-underline-from-link) which applied the 'text-decoration' styling to all anchor tags. There is only one anchor tag in this file therefore this solution worked fine however may not be useful for a more complex page with multiple links and styling options.

- <b>Issue</b>
I tested the site for reponsivness on iamresponsive.com which showed the site working and looking as expected across varying device sizes however, when opened on an actual device (mobile) the play button on the homepage appeared oval shape.

- <b>Solution</b>
Using media queries, take off the border radius for mobile screens

## Deployment
The quiz was deployed with GitHub using the below steps:

- Within the relavant repository, select 'Settings'.
- Navigate to the 'Pages' section displayed on the left menu.
- Select the main branch from the drop-down menu and save to display the link to your website.

Know Your... Geography can be viewed [here]("https://jamitag.github.io/Know-Your-Geography/")

## Credits

### Content

- I used this [method]("https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript") to refresh the page at the end of the quiz.

- The formatting of the questionArray was taken [Here](https://www.sitepoint.com/simple-javascript-quiz/).

- This [solution](https://stackoverflow.com/questions/2789703/remove-blue-underline-from-link) was used to overcome a styling issue on the header.

- Inspiration for the the layout and required functionality for the quiz was taken from this [tutorial](https://www.youtube.com/watch?v=riDzcEQbX6k).


### Media

I obtained my background image from pexels.com.

A special thank you goes to Sandeep, my mentor, and also my son, Thomas, who enjoyed testing the quiz throughout development and gave some interesting feedback.