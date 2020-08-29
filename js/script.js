// JavaScript 
// var pink = document.body.style.backgroundImage = "url('images/gradient4.jpg')";
// var cover = document.body.style.backgroundSize = "cover";
// var d = localStorage.setItem('test', pink + cover)
// // alert( localStorage.getItem('test') );
// document.getElementById("test").innerText = localStorage.getItem('test');

// document.addEventListener("click", function(){
// let colorValues = [""];
// document.body.style.backgroundImage = "url('images/gradient5.jpg')";
// document.body.style.backgroundSize = "cover";
// });


// var e = localStorage.setItem('test2', "red");
// document.getElementById("test2").innerText = localStorage.getItem('test2');

// var color = document.body.style.backgroundImage = "url('images/gradient4.jpg')";
// var e = localStorage.setItem('test2', 'color');
// e.addEventListner("click", funtion() {
//   document.body.style.backgroundImage = "url('images/gradient4.jpg')";

// });

// document.body.style.backgroundSize = "cover";
// var backgroundImage = localStorage.getItem('color');
// if (backgroundImage) {
//   document.querySelector('#one').style.backgroundImage = url;
// }

// alert( localStorage.getItem('test2'));
// document.addEventListner("click", function() {
//   var pink = document.body.style.backgroundImage = "url('images/gradient4.jpg')";
//   var d = localStorage.setItem('test', pink)
//   // alert( localStorage.getItem('test') );
//   document.getElementById("test").innerText = localStorage.getItem('test');
// })


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
let rules = ['Design for users.', 'Mobile website experience should be equal or surpass the desktop experience.', 'Speed up Images.', 'Add strong Calls to Action.', 'Make information easy to locate.', 'The most important information on your webpage should always stand out as the most visually prominent.', 'Icons should only be used when necessary.', 'The main purpose of each webpage should be obvious to the user.', 'Users can focus on only one thing at a time.', 'Buttons on websites must look clickable and have enough space for users to click or tap comfortably.', 'Always have an obvious way to access the navigation menu.', 'Design for color blind users.', 'Provide absolute clarity.', 'Give users control.', 'Predict, then adapt.', 'Maintain consistency.', 'Treat users as customers and vice-versa.', 'Communicate value proposition.', 'Improve accessibility, by considering contrast between the foreground and background colors.'];

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


// if (typeof(Storage) !== "undefined") {
//   // Store
//   localStorage.setItem("color", "red");
//   // Retrieve
//   document.body.style.backgroundImage = "url('images/gradient4.jpg')";
// } else {
//   document.body.style.backgroundImage = "blue";
// }
document.getElementById("one").addEventListener("click", function(){
  var pink = document.body.style.backgroundImage = "url('images/gradient4.jpg')";
  var cover = document.body.style.backgroundSize = "cover";
  var currentColor = localStorage.setItem('bgcolor', pink + cover)
  // document.body.style.backgroundImage = "url('images/gradient4.jpg')";
  // document.body.style.backgroundImage = pink;
  // document.body.style.backgroundSize = "cover";
  document.getElementById("bg").value = localStorage.getItem('bgcolor');
});

// Function to change webpage BACKGROUND COLOR
// function changeBodyPink(){
//   document.body.style.backgroundImage = "url('images/gradient4.jpg')";
//   document.body.style.backgroundSize = "cover";
// }

// Function to change webpage BACKGROUND COLOR
function changeBodyKashmir(){
  document.body.style.backgroundImage = "url('images/gradient5.jpg')";
  document.body.style.backgroundSize = "cover";
}

// Function to change webpage BACKGROUND COLOR
function changeBodyGray(){
  document.body.style.backgroundImage = "url('images/gradient1.jpg')";
  document.body.style.backgroundSize = "cover";
}

// Function to change webpage BACKGROUND COLOR
function changeBodyBlue(){
  document.body.style.backgroundImage = "url('images/gradient2.jpg')";
  document.body.style.backgroundSize = "cover";
}

// Function to change webpage BACKGROUND COLOR
function changeBodyBlueGreen(){
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
  const comments = ["I am disappointed when visiting a website that lacks information. I can't find any relevant information I was searching for.", "It's too hard to read. The font size is just too small.", "I just want to be able to come to a site and have the quickest and easiest time finding information.", "I don't want to scroll over and over looking for products to buy.", "I love a seemless experience when shopping online!", "Having to scroll endlessly is not my idea of a fun experience.", "It is really frustrating filling out a long form, all to lose it when I accidentally navigate to another page!", "The best experience for me is when there is an element of surprise on every page I visit. I love when websites surprise and entertain me.", "Who doesn’t love a good deal? I want to find the best deal and compare all my options when purchasing a similar product or service.", "I do NOT have the patience to wait for images to load on a slow webpage. I will just look elsewhere."];
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
