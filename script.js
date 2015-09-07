var $about = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var $image = "<div><img src='pictures/rain.jpg'<div>"
var $image1 = "<div><img src='rain.jpg'<div>"
var $image2 = "<div><img src='lll.jpg'<div>"

$(document).ready(function(){
	$('#main-cont').html($about);
});	


$('.about').click(function(){
	$('#main-cont').html($about);
});

$('.image').click(function(){
	$('#main-cont').html($image);
});