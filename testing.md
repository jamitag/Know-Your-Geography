# Know Your Geography - Testing

## Welcome - [Know Your Geography](https://jamitag.github.io/Know-Your-Geography/)

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
My mentor suggested adding some padding to the icon which fixed the issue.