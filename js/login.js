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

//-----

$(document).ready(function(){ 
  $('#ocultar').toggle();
});
//----
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
  $("#bandera").attr("maxlength", "11")
  $('#ocultar').toggle();

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
   $("#bandera").attr("maxlength", "11")
   $('#ocultar').toggle();
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
   $("#bandera").attr("maxlength", "11")
   $('#ocultar').toggle();
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
   $("#bandera").attr("maxlength", "11")
   $('#ocultar').toggle();
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
   $("#bandera").attr("maxlength", "10")
   $('#ocultar').toggle();
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
   $("#bandera").attr("maxlength", "11")
   $('#ocultar').toggle();
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
   $("#bandera").attr("maxlength", "11")
   $('#ocultar').toggle();

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
   $("#bandera").attr("maxlength", "11")
   $('#ocultar').toggle();

 });


});

//----------------VALIDACION

$(document).ready(function (){
  $('#bandera').keyup(function(){
   bandera.value = (bandera.value + '').replace(/[^0-9]/g, '');
 });
});

//---


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


$("#siguiente_uno").click(function(){
  var numero_telf = $("#bandera").val();
  var obtener_codigo_telef = $("#obtener_telf").val;
  var prefijo_codigo = $(".codigo").text();
  localStorage.setItem("valor_telefonico", numero_telf);

  if (numero_telf == null || numero_telf.length==0) {
    alert("Ingrese todo el número telefonico")
    return false;
  }

  else{
    var ingrese_numero = $("#bandera").val();
    if($("#bandera").attr("maxlength") == ingrese_numero.length){
     $("#obtener_telf").append("Tu número de telefono es:" + " " + prefijo_codigo + " " + localStorage.getItem("valor_telefonico")); 
     $("#siguiente_uno").click(function(){
      window.location.href="codigo.html";
    });
   } else{
    alert ("Ingresa tu numero telefonico")
    return false;
  }
}

});


//----

$("#siguiente_dos").click(function(){
  var contenido_nombre_apellido = $('#espacios').val();
  if(contenido_nombre_apellido==null || contenido_nombre_apellido.length==0 || /^\s+$/.test(contenido_nombre_apellido)){
    alert("Campo nombre obligatorio");
    return false;
  }

  var contenido_apellido = $('#espacios_tres').val();
  if(contenido_apellido==null || contenido_apellido.length==0 || /^\s+$/.test(contenido_apellido)){
    alert("Campo apellido obligatorio");
    return false;
  }

  var contenido_mail = $('#espacios_uno').val();
  if(contenido_mail==null || contenido_mail.length==0 || /^\s+$/.test(contenido_mail)){
    alert("Email obligatorio.");
    return false;
  }

  var seleccionar = $(".largo").is(":checked");
  if (!seleccionar) {
    alert("Aceptar terminos y servicios");
    return false;
  }

  var nombre_se_guarda = $("#espacios").val();
  localStorage.setItem("guardo_nombre", nombre_se_guarda);

});

$(document).ready(function(){
  $(".nombre_guardado").append(localStorage.getItem("guardo_nombre"));
  $(".guardo_nombre_uno").append(localStorage.getItem("guardo_nombre"));


});


 //---
 $(document).ready(main);
 var contador = 1;
 function main(){
  $('.verMenu').click(function(){
    console.log(contador)

    if(contador == 1){
      $('nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }

  });

};

//---
$("#file-input").on( "click", function() {
      $('.foto_usuario').hide(); //oculto mediante id
    });


$(window).load(function(){

 $(function() {
  $('#file-input').change(function(e) {
    addImage(e); 
  });

  function addImage(e){
    var file = e.target.files[0],
    imageType = /image.*/;
    
    if (!file.type.match(imageType))
     return;

   var reader = new FileReader();
   reader.onload = fileOnload;
   reader.readAsDataURL(file);
 }

 function fileOnload(e) {
  var result=e.target.result;
  localStorage.setItem("guardar_imagen", result);
  $('.foto_usuario').attr("src", localStorage.getItem("guardar_imagen"));


      //$('#imgSalida').attr("src",result);
    }
  });
});

/*$(document).ready(function(){
  $('.esconde').hide(); //oculto mediante id

});*/



