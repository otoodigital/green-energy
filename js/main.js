/* 
Declare variables:
masthead (HTML container storing 
the current slide - slide-show part)

slides (array of elements storing 
all slides - slide-show part)

buttons (collected list of 
3 buttons in array - main content hide/reveal part)

contents (array of 3 elements - contents 
in main content hide/reveal part)

container (HTML element that will get a content
from array contents)

i (variable to be used as index-pointer 
inside loops for slide-show part)

k (variable to be used as index-pointer
inside loops for hide/reveal content part) */

var masthead,
    slides,
    buttons,
    contents,
    i,
    k;



/* 
Access empty div with the 
class "mh-image" (look at the HTML structure 
above), and pass the reference
to variable masthead */ 

var masthead = document.querySelector(".mh-image");

/* 
Assign 4 elements to array slides
(slide-show content) */

slides = [
    "<figure><img src=\"./img/lb1a.jpg\" alt=\"slide-one-description\" /><figcaption>Energy Efficient Lightbulbs</figcaption></figure>",
    "<figure><img src=\"./img/wm1a.jpg\" alt=\"slide-two-description\" /><figcaption>Wind Turbines</figcaption></figure>",
    "<figure><img src=\"./img/sp1a.jpg\" alt=\"slide-three-description\" /><figcaption>Solar Panels</figcaption></figure>",
    "<figure><img src=\"./img/recycle.png\" alt=\"slide-four-description\" /><figcaption>Recycling Bins</figcaption></figure>"
];


/* 
Define function fadeOut. This function will 
make currently displayed slide disappear. */
   /* 
   Use style object with property opacity 
   on masthead and set it to 0. */
/* 
End function fadeOut. */


function fadeOut() {
  masthead.style.opacity = 0;
}

/* 
Use i as index pointer for the array slides.
Assign i with initial value 0. */



i = 0;

/* 
Define function runSlides. 
This function will loop through the array slides. */
   /* 
   Set opacity of masthead to 1.
   Make sure masthead is visible 
   (use style object and opacity on masthead). */

   /* 
   Check the value of i.
   If the value of i is greater than 3 
   (3 is index of fourth slide),
   reset the value of i to 0 
   (slide-show starts over). */

   /* 
   Use i to pass the next in line slide 
   from array slides to masthead. */

   /* 
   Increment i. */

   /* 
   Use setTimeOut() to call function fadeout 
   after 5 seconds.(Slide will remain displayed 
   for 5s and then, function fadeOut 
   will make it disappear). */	
/* 
End function runSlides. */

function runSlides() {
    "use strict";
    masthead.style.opacity = 1;
    if (i > 3) {
        i = 0;
    }
    
    masthead.innerHTML = slides[i];
    
    i +=1;
    
    setTimeout(fadeOut, 5000);
}

runSlides(); 

setInterval(runSlides, 6000);


/* 
Collect all buttons in array buttons. 

Have all contents in array contents. 

Access div with the class "container"
and pass the reference to variable container.*/

/*
Pass the value of the first array-element of array contents
to container (use innerHTML on container). */

buttons = document.querySelectorAll(".btn");


contents = [
    "<figure><img src=\"./img/solar.png\" alt=\"slide-one-description\" /><figcaption></figcaption></figure>",
    "<figure><img src=\"./img/wind.png\" alt=\"slide-two-description\" /><figcaption></figcaption></figure>",
    "<figure><img src=\"./img/hydropower.png\" alt=\"slide-three-description\" /><figcaption></figcaption></figure>"
];

var container = document.querySelector(".container");

k = 0;

container.innerHTML = contents[k];


/* 
Define function handleClick 
(pass event object to function) */
   /* 
   Loop through buttons array and
   use removeAttribute() to remove 
   id with the value active from an HTML element 
   that contains this id (use hasAttribute() in if-statement to check). */
 
   /* 
   Use innerHTML on ev.target to check which button
   was clicked. Based on this, display corresponding array 
   element inside <div class="container"></div> */

   /*
   Add the class active to clicked list item (use ev.target) */
/* 
End function handleClick. */



function handleClick (ev) {
    for (k = 0; k < buttons.length; k += 1) {
        
        if (buttons[k].hasAttribute("active")) {
            buttons[k].removeAttribute("active");
        }
    }
        
        if (ev.target.innerHTML === "Solar") {
            container.innerHTML = contents[0];
        } else if (ev.target.innerHTML === "Wind") {
            container.innerHTML = contents[1];
        } else if (ev.target.innerHTML === "Hydropower") {
            container.innerHTML = contents[2];
        }
    }


for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
   
}



















