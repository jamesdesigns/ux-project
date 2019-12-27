// JavaScript 

// Scroll Status Indicator
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

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
gsap.to("#menuBtn", {y:-25, duration: 1});
// gsap.to(".menuBlock", {y:100, duration: 1}); 


// Function to change webpage BACKGROUND COLOR
function changeBodyPink(){
  // document.body.style.background = color1;
  let colorValues = [""];
  document.body.style.backgroundImage = "url('images/gradient4.jpg')";
  document.body.style.backgroundSize = "cover";
}

// Function to change webpage BACKGROUND COLOR
function changeBodyKashmir(){
  // document.body.style.background = color1;
  let colorValues = [""];
  document.body.style.backgroundImage = "url('images/gradient5.jpg')";
  document.body.style.backgroundSize = "cover";
}

// Function to change webpage BACKGROUND COLOR
function changeBodyGray(){
  // document.body.style.background = color1;
  let colorValues = [""];
  document.body.style.backgroundImage = "url('images/gradient1.jpg')";
  document.body.style.backgroundSize = "cover";
}

// Function to change webpage BACKGROUND COLOR
function changeBodyBlue(){
  // document.body.style.background = color1;
  let colorValues = [""];
  document.body.style.backgroundImage = "url('images/gradient2.jpg')";
  document.body.style.backgroundSize = "cover";
}

// Function to change webpage BACKGROUND COLOR
function changeBodyBlueGreen(){
  // document.body.style.background = color1;
  let colorValues = [""];
  document.body.style.backgroundImage = "url('images/gradient3.jpg')";
  document.body.style.backgroundSize = "cover";
}



// Random User API
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=1';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  const comments = ["I just want to be able to come to a site and have the quickest and easiest time finding information. I don't want to scroll over and over looking for products to buy.", "I love a seemless experience when shopping online!", "Having to scroll endlessly is not my idea of a fun experience.", "It is really frustrating filling out a long form, all to lose it when I accidentally navigate to another page!", "The best experience for me is when there is an element of surprise on every page I visit. I love when websites surprise and entertain me."];
  const map1 = comments[Math.floor(Math.random() * comments.length)];
  
  return authors.map(function(author) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
        p = createNode('p');
        img.src = author.picture.medium;

    p.innerHTML = `${map1}`;
    span.innerHTML = `&#8212; <i>${author.name.first} ${author.name.last}</i>`;
    append(li, img);
    append(li, p);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   
