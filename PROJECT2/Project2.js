console.log("Hello World");

$(document).ready(function(){

  $(".star").hide();
  $(".words").hide();


  $("btn1").click(function(){
    $(".star").fadeIn(5000);
    $(".lime").fadeOut(3000);
    $("btn1").fadeOut(3000);
    $(".words").fadeIn(3000);

  });

// the following is a click on butterflies

  $(".green").click(function(){
    alert("Hello! Welcome to the land between heaven and hell.");
  });

  $(".atlas").click(function(){
    alert("You might be wondering who we are... We're Fugitives. We are your consciousness in its purest sense, your spirit detatched from the earth.");
  });

  $(".pearl").click(function(){
    alert("We've been trapped here, on this page. But you've been trapped too, as a human, but confining you to that form is limiting who you really are inside.");
  });

  $(".side").click(function(){
    alert("We have a story to tell you, but we can't speak because we haven't been translated into life, so our voices remain overshadowed.");
  });

  $(".whing").click(function(){
    alert("The key to set us free is recognition");
  });

  $(".drip").click(function(){
    alert("We try to convert mind into matter, because matter and mind are at war. Our wings illuminate a visceral symphony of embedded sentiments, they are your translated lifetime, and our bodies serve as a host.");
  });

  $(".smile").click(function(){
    alert("Scroll down to read the story below. It's about a friend of mine who has been set free.");
  });

  $(".yellow").click(function(){
    alert("We're watching you.");
  });

  $(".boy").click(function(){
    alert("Get ready to read, haha.");
  });

  $(".moth").click(function(){
    alert("We love you.");
  });

  //the following is a click on the button funtion
  $(".button").click(function(){


  });


  $(".button").click(function(){
    window.scrollTo(0, window.scrollY + window.innerHeight);

  });

$(".red").click(function(){
window.scrollTo(0, window.scrollY + window.innerHeight);
});





});
