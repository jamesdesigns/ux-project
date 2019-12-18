// JavaScript 

// Assign UX rules into an array
let rules = ['Design for users.', 'The most important information on your webpage should always stand out as the most visually prominent.', 'Icons should only be used when necessary.', 'The main purpose of each webpage should be obvious to the user.', 'Users can focus on only one thing at a time.', 'Buttons on websites must look clickable and have enough space for users to click or tap comfortably.', 'Always have an obvious way to access the navigation menu.', 'Design for color blind users.', 'Provide absolute clarity.', 'Give users control.', 'Predict, then adapt.', 'Maintain consistency.', 'Treat users as customers and vice-versa.', 'Communicate value proposition.'];

// Get the ID where the rules will output
let newRule = document.getElementById("rules");
// Make the rules output randomly using the Math.random
newRule.innerHTML = rules[Math.floor(Math.random() * rules.length)];

let colors = ['#F0F0F0']; /* '#002b80','#282828',  */
let randomColors = colors[Math.floor(Math.random()*colors.length)];

let x = document.getElementById('rules');
x.style.color = randomColors;

// GreenSock MENU
gsap.to("#menuBtn", {y:-25, duration: 1})
// gsap.to(".menuBlock", {y:100, duration: 1}); 


// Function to change webpage background color
function changeBodyBg(color1){
    document.body.style.background = color1;
}