var $about = "Hello, I'm Aleksa. I'm on the path of becoming web developer. This site is my little piece of web which will evolve with my programming skills."

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