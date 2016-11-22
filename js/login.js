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

$(document).ready(function(){ 
      $('#ocultar').toggle();
   });
//------------------------------------
$(document).ready(function(){ 
   $('#enlazar').on('click',function(){
      $('#ocultar').toggle();
     // $('#cambio').prepend('<img id="foto" src="32/GT.png" />')

   });
});
//-------------------
$(document).ready(function(){ 
   $('#cambiar_australia').on('click',function(){
      //$('#ocultar').toggle();
      //$('#cambio').prepend('<img id="foto" src="32/GT.png" />')

   });
});
