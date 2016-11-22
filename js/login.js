$(document).on('ready', function(){
  $('#listado li').on('click', function (){ // listado mi lista de origen (listado)
    $(this).css('background', 'white'); // dandole color
  });

  $('#listado li').on('mouseover', function (){
    $(this).css('background', '#F7F7F7');
  });

  $('#listado li').on('mouseout', function (){
    $(this).css('background', 'white');
  });
});

//--------------------------------------------------

 