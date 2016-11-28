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
      $('#desaparece').toggle();
      $('#ocultar').toggle();
   });
});

//------------------ BANDERA AUSTRALIA
$(document).ready(function(){ 
   $('#cambiar_australia').on('click',function(){
    $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/AU.png");
    $('.codigo').text("+61");
     $('#ocultar').toggle();
   });  
});

//------------------ BANDERA ALEMANIA
$(document).ready(function(){ 
   $('#cambiar_alemania').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/DE.png");
    $('.codigo').text("+49");
     $('#ocultar').toggle();

   });
});

//------------------ BANDERA ARGENTINA
$(document).ready(function(){ 
   $('#cambiar_argentina').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/GT.png");
    $('.codigo').text("+54");
     $('#ocultar').toggle();

   });
});

//------------------ BANDERA CANADA
$(document).ready(function(){ 
   $('#cambiar_canada').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CA.png");
    $('.codigo').text("+1");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA COLOMBIA
$(document).ready(function(){ 
   $('#cambiar_colombia').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CO.png");
    $('.codigo').text("+67");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA CHILE
$(document).ready(function(){ 
   $('#cambiar_chile').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CL.png");
    $('.codigo').text("+56");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA URUGUAY
$(document).ready(function(){ 
   $('#cambiar_uruguay').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/UY.png");
    $('.codigo').text("+598");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA VENEZUELA
$(document).ready(function(){ 
   $('#cambiar_venezuela').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/VE.png");
    $('.codigo').text("+58");
     $('#ocultar').toggle();

   });
});

//----------------VALIDACION

var limite_numeros = document.getElementById("bandera"),
    limite = 6;
 
limite_numeros.onkeypress = function(event){
  var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
  if (valor == limite)
    alert("Ya alcanzó el límite de caracteres");
 
  if (valor >= limite)
    event.preventDefault(); //Cancela la acción del evento
};

$(document).ready(function (){
    $('#bandera').keyup(function(){
       bandera.value = (bandera.value + '').replace(/[^0-9]/g, '');
    });
 });

//-----------------

$("#siguiente").click(function(){
alert('LAB-' +Math.round(Math.random() * (999 - 100) + 100 ));
});
