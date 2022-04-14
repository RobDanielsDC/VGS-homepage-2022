






//  doesn't work :(

/************
  Functions
************/


  
  // Change the style of whatever we pass to the function; this will move the element around on the page
  function moveTheThing(theThing, x, y) {
    // Do some math!
    const transformationX = Math.round(x / innerWidth * 100) - 50;
    const transformationY = Math.round(y / innerHeight * 100) - 50;
    const intensity = 1;
    
    // Call our other function to change the numbers displayed on the page
    displayXAndY(theThing, transformationX, transformationY);
    
    // Apply a style to the thing we want to animate
    theThing.style.transform = "translateX(" + -transformationX * intensity + "px) translateY(" + -transformationY * intensity + "px)";
  }
  


  /******************
    Event Listeners
  ******************/
  const body = document.querySelector("body");  
  const thingToMove = document.getElementById("thing-to-move");
  
  // Mousemove for desktop
  body.addEventListener("mousemove", (event)=>{
    moveTheThing(thingToMove, event.clientX, event.clientY);
  });
  
  // Touchmove for mobile
  body.addEventListener("touchmove", (event)=>{
    moveTheThing(thingToMove, event.target[0].clientX, event.target[0].clientY);
  });