$('button').on('click', function(){
  $('div').fadeOut(1000, function(){
    $(this).remove();
    // console.log("fade completed");
  });
});

$('button').on('click', function(){
  $('div').fadeIn(1000, function(){
    // $(this).remove();
    // console.log("fade completed");
  });
});

$('button').on('click', function(){
  $('div').fadeToggle(500);
});


$('button').on('click', function(){
  $('div').slideDown();
});

$('button').on('click', function(){
  $('div').slideUp();
});

