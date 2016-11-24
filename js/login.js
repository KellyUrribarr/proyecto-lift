/*$(document).on('ready', function(){
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
      //$('#cambio').prepend('<img id="foto" src="32/GT.png" />')

   });
});

/*----------------borrar
$(document).ready(function(){ 
   $('#cambiar_australia').on('click',function(){
      $('#cambiar_australia').val();
      //$('#cambio').toggle();
      $("#cambio").click(function(){
		$('.ocultar').show(('<img id="foto" src="32/GT.png" />'),function() {
                alert ('imagen mostrada!');
		});
 	});
      //$('#cambio').append('<img id="foto" src="32/GT.png" />')

   });
});
//---


//------------------ BANDERA AUSTRALIA
$(document).ready(function(){ 
   $('#cambiar_australia').on('click',function(){
    $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/AU.png");
    $('input').attr('placeholder', "+61");
     $('#ocultar').toggle();
   });  
});

//------------------ BANDERA ALEMANIA
$(document).ready(function(){ 
   $('#cambiar_alemania').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/DE.png");
    $('input').attr('placeholder', "+49");
     $('#ocultar').toggle();

   });
});

//------------------ BANDERA ARGENTINA
$(document).ready(function(){ 
   $('#cambiar_argentina').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/GT.png");
    $('input').attr('placeholder', "+54");
     $('#ocultar').toggle();

   });
});

//------------------ BANDERA CANADA
$(document).ready(function(){ 
   $('#cambiar_canada').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CA.png");
    $('input').attr('placeholder', "+1");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA COLOMBIA
$(document).ready(function(){ 
   $('#cambiar_colombia').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CO.png");
    $('input').attr('placeholder', "+67");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA CHILE
$(document).ready(function(){ 
   $('#cambiar_chile').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/CL.png");
    $('input').attr('placeholder', "+56");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA URUGUAY
$(document).ready(function(){ 
   $('#cambiar_uruguay').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/UY.png");
    $('input').attr('placeholder', "+598");
     $('#ocultar').toggle();

   });
});


//------------------ BANDERA VENEZUELA
$(document).ready(function(){ 
   $('#cambiar_venezuela').on('click',function(){
     $('#desaparece').toggle();
    var src = '32/GT.png';
    $('#cambio').attr('src', "32/VE.png");
    $('input').attr('placeholder', "+58");
     $('#ocultar').toggle();

   });
});
*/

//-----------------

//$(document).ready(function(){ 
   //$('#file-input').on('click',function(){
    // $('.foto_usuario').toggle();

  // });
//});

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
      $('#imgSalida').attr("src",result);
     }
    });
  });








