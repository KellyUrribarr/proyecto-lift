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
      //$('#desaparece').toggle();
      $('#ocultar').toggle();
     // $('#cambio').prepend('<img id="foto" src="32/GT.png" />')

   });
});
//------------------ BANDERA AUSTRALIA
$(document).ready(function(){ 
   $('#cambiar_australia').on('click',function(){
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/AU.png");
    $('input').attr('placeholder', "+61");
     $('#ocultar').toggle();
   });  
});

//------------------ BANDERA ALEMANIA
$(document).ready(function(){ 
   $('#cambiar_alemania').on('click',function(){
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/DE.png");
    $('input').attr('placeholder', "+49");
     $('#ocultar').toggle();

   });
});

//------------------ BANDERA ARGENTINA
$(document).ready(function(){ 
   $('#cambiar_argentina').on('click',function(){
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/GT.png");
    $('input').attr('placeholder', "+54");
     $('#ocultar').toggle();

   });
});

//------------------ BANDERA CANADA
$(document).ready(function(){ 
   $('#cambiar_canada').on('click',function(){
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CA.png");
    $('input').attr('placeholder', "+1");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA COLOMBIA
$(document).ready(function(){ 
   $('#cambiar_colombia').on('click',function(){
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CO.png");
    $('input').attr('placeholder', "+67");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA CHILE
$(document).ready(function(){ 
   $('#cambiar_chile').on('click',function(){
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CL.png");
    $('input').attr('placeholder', "+56");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA URUGUAY
$(document).ready(function(){ 
   $('#cambiar_uruguay').on('click',function(){
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/UY.png");
    $('input').attr('placeholder', "+598");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA VENEZUELA
$(document).ready(function(){ 
   $('#cambiar_venezuela').on('click',function(){
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/VE.png");
    $('input').attr('placeholder', "+58");
     $('#ocultar').toggle();

   });
});




