// JavaScript 

// Assign UX rules into an array
let rules = ['Design for users.', 'Provide absolute clarity.', 'Give users control.', 'Predict, then adapt.', 'Maintain consistency.', 'Treat users as customers and vice-versa.', 'Communicate value proposition.'];

// Get the ID where the rules will output
let newRule = document.getElementById("rules");
// Make the rules output randomly using the Math.random
newRule.innerHTML = rules[Math.floor(Math.random() * rules.length)];

let colors = ['#003399','#282828','#F0F0F0'];
let randomColors = colors[Math.floor(Math.random()*colors.length)];

let x = document.getElementById('rules');
x.style.color = randomColors;