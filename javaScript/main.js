/***** Boton para ver y ocutar información *****/
//Contacto
document.getElementById('botonVer1').addEventListener('click', function(){
   document.getElementById('contacto').style.display = ''; 
});

document.getElementById('botonOcultar1').addEventListener('click', function(){
   document.getElementById('contacto').style.display = 'none'; 
});

//Perfil
document.getElementById('botonVer2').addEventListener('click', function(){
   document.getElementById('perfil').style.display = ''; 
});

document.getElementById('botonOcultar2').addEventListener('click', function(){
   document.getElementById('perfil').style.display = 'none'; 
});

//Habilidades
document.getElementById('botonVer3').addEventListener('click', function(){
   document.getElementById('habilidades').style.display = ''; 
});

document.getElementById('botonOcultar3').addEventListener('click', function(){
   document.getElementById('habilidades').style.display = 'none'; 
});

//Idiomas
document.getElementById('botonVer4').addEventListener('click', function(){
   document.getElementById('idiomas').style.display = ''; 
});

document.getElementById('botonOcultar4').addEventListener('click', function(){
   document.getElementById('idiomas').style.display = 'none'; 
});

//Educación
document.getElementById('botonVer5').addEventListener('click', function(){
   document.getElementById('educacion').style.display = ''; 
});

document.getElementById('botonOcultar5').addEventListener('click', function(){
   document.getElementById('educacion').style.display = 'none'; 
});

//Experiencia Profesional
document.getElementById('botonVer6').addEventListener('click', function(){
   document.getElementById('experiencia').style.display = ''; 
});

document.getElementById('botonOcultar6').addEventListener('click', function(){
   document.getElementById('experiencia').style.display = 'none'; 
});


/***** Agregamos API de Geolocalización *****/

getLocation()
function getLocation() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
   } else { 
     console.log ("Su navegador no soporta la geolocalización");
   }
 }
 
 function showPosition(position) {
   console.log ("Latitud: " + position.coords.latitude + 
   " Longitud: " + position.coords.longitude);
 }

 function showError(error) {
   switch(error.code) {
     case error.PERMISSION_DENIED:
      console.log ("El usuario denegó la geolocalización.")
       break;
     case error.POSITION_UNAVAILABLE:
      console.log ("La localización informada no esta disponible.")
       break;
     case error.TIMEOUT:
      console.log ("Se agotó el tiempo de espera de la solicitud para obtener la ubicación del usuario.")
       break;
     case error.UNKNOWN_ERROR:
      console.log ("Ocurrió un error desconocido.")
       break;
   }
 }

 
