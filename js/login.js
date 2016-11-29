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
    $('input').attr('placeholder', "102056059");
    $('.codigo').text("+61");
     $('#ocultar').toggle();
   });  

    var limite_numeros = $('#bandera');
    var limite = 11;
 
    limite_numeros.on('keypress', function(ev){
      var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
      if (valor == limite){
        alert("Ya alcanzó el límite de caracteres");
      }
   
      if (valor >= limite){
        event.preventDefault(); //Cancela la acción del evento
      }
    });
});

//------------------ BANDERA ALEMANIA
$(document).ready(function(){ 
   $('#cambiar_alemania').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/DE.png");
     $('input').attr('placeholder', "902056065");
    $('.codigo').text("+49");
     $('#ocultar').toggle();

   });

   var limite_numeros = $('#bandera');
    var limite = 11;
 
    limite_numeros.on('keypress', function(ev){
      var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
      if (valor == limite){
        alert("Ya alcanzó el límite de caracteres");
      }
   
      if (valor >= limite){
        event.preventDefault(); //Cancela la acción del evento
      }
    });
});

//------------------ BANDERA ARGENTINA
$(document).ready(function(){ 
   $('#cambiar_argentina').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/GT.png");
    $('input').attr('placeholder', "91112329384");
    $('.codigo').text("+54");
     $('#ocultar').toggle();
   });

   var limite_numeros = $('#bandera');
    var limite = 11;
 
    limite_numeros.on('keypress', function(ev){
      var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
      if (valor == limite){
        alert("Ya alcanzó el límite de caracteres");
      }
   
      if (valor >= limite){
        event.preventDefault(); //Cancela la acción del evento
      }
    });
});

//------------------ BANDERA CANADA
$(document).ready(function(){ 
   $('#cambiar_canada').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CA.png");
    $('input').attr('placeholder', "4168955137");
    $('.codigo').text("+1");
     $('#ocultar').toggle();
   });

   var limite_numeros = $('#bandera');
    var limite = 11;
 
    limite_numeros.on('keypress', function(ev){
      var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
      if (valor == limite){
        alert("Ya alcanzó el límite de caracteres");
      }
   
      if (valor >= limite){
        event.preventDefault(); //Cancela la acción del evento
      }
    });
});

//------------------ BANDERA COLOMBIA
$(document).ready(function(){ 
   $('#cambiar_colombia').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CO.png");
    $('input').attr('placeholder', "3173372737");
    $('.codigo').text("+57");
     $('#ocultar').toggle();
   });
   var limite_numeros = document.getElementById("bandera"),
    limite = 10;
 
var limite_numeros = $('#bandera');
    var limite = 11;
 
    limite_numeros.on('keypress', function(ev){
      var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
      if (valor == limite){
        alert("Ya alcanzó el límite de caracteres");
      }
   
      if (valor >= limite){
        event.preventDefault(); //Cancela la acción del evento
      }
    });
});

//------------------ BANDERA CHILE
$(document).ready(function(){ 
   $('#cambiar_chile').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CL.png");
    $('input').attr('placeholder', "22045199");
    $('.codigo').text("+56");
     $('#ocultar').toggle();
   });

   var limite_numeros = $('#bandera');
    var limite = 11;
 
    limite_numeros.on('keypress', function(ev){
      var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
      if (valor == limite){
        alert("Ya alcanzó el límite de caracteres");
      }
   
      if (valor >= limite){
        event.preventDefault(); //Cancela la acción del evento
      }
    });
});

//------------------ BANDERA URUGUAY
$(document).ready(function(){ 
   $('#cambiar_uruguay').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/UY.png");
    $('input').attr('placeholder', "22045199");
    $('.codigo').text("+598");
     $('#ocultar').toggle();

   });

   var limite_numeros = $('#bandera');
    var limite = 11;
 
    limite_numeros.on('keypress', function(ev){
      var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
      if (valor == limite){
        alert("Ya alcanzó el límite de caracteres");
      }
   
      if (valor >= limite){
        event.preventDefault(); //Cancela la acción del evento
      }
    });
});


//------------------ BANDERA VENEZUELA
$(document).ready(function(){ 
   $('#cambiar_venezuela').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/VE.png");
    $('input').attr('placeholder', "02616230375");
    $('.codigo').text("+58");
     $('#ocultar').toggle();

   });

   var limite_numeros = $('#bandera');
    var limite = 11;
 
    limite_numeros.on('keypress', function(ev){
      var valor = limite_numeros.value.length; //obteniendo el largo de limite_numeros
      if (valor == limite){
        alert("Ya alcanzó el límite de caracteres");
      }
   
      if (valor >= limite){
        event.preventDefault(); //Cancela la acción del evento
      }
    });
});

//----------------VALIDACION

$(document).ready(function (){
    $('#bandera').keyup(function(){
       bandera.value = (bandera.value + '').replace(/[^0-9]/g, '');
    });
 });

//-----------------


$(".ver_codigo").click(function(){

  var codigo = ('LAB-' +Math.round(Math.random() * (999 - 100) + 100 ));
  localStorage.setItem('codigo_seguridad', codigo);
  alert('Su codigo es: ' + codigo);

});

$('#siguiente').on('click',function(){

    var value = $('#codigo_seguridad').val();
    var codigo_guardado = localStorage.getItem('codigo_seguridad');

    if (codigo_guardado == value){
      alert("aceptado") ;
    }else{
      alert("denegado");
      return false;
    }
});





//-----------

//$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

//----------







