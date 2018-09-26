//JS page for js_demo
console.log('DOM is loaded');

//Get your objects
var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var tooltip = document.getElementById('tooltip');

//Adding the click events
burger.addEventListener('click', function(){
  console.log('Button clicked');
  mobileNav.style.width = '40%';
  mobileNav.style.transition = '0.5 ease';
  content.style.opacity = '0.1';
});

closeBtn.addEventListener('click', function(){
  console.log('Close the menu');
  mobileNav.style.width = '0%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '1';
});

moreInfoText.addEventListener('mouseenter',function(event){
  //code goes here
  tooltip.style.opacity = '1';
  var x = event.screenX;     // Get the horizontal coordinate
  var y = event.screenY;     // Get the vertical
  console.log(y);
  tooltip.style.top = y + 'px';
  tooltip.style.right = x + 'px';
  tooltip.style.transition = '0.2 ease';
});

moreInfoText.addEventListener('mouseout', function(){
  console.log('Leaving the mouse');
  tooltip.style.opacity = '0';
});
