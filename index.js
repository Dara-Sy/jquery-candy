$("ul").html();
    // output will be
    // <li>Skittles</li>
    // <li>Starburst</li>
    // <li>Kit Kat</li>

// changes the attributes
$("img").attr({
  "width" : "500px",
  "height" : "300px"
});

// will show your candy choice in console once selected
$("select").val();

$("h1").addClass("correct");

$("h1").removeClass("correct");

$('option').addClass("wrong");

$(".or").toggleClass("done");

$("button").click(function(){
  $(this).css("background", "pink");
});

$("button").click(function(){
  let text = $(this).text();
  console.log("You clicked " + text);
});


$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    alert("you hit enter");
  }
});

$("button").on("mouseenter", function() {
  /* Act on the event */
  $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
  /* Act on the event */
  $(this).css("font-weight", "bold");
});


