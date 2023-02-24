// document.getElementById('contacto').onclick = function () {
//     document.getElementById('boton').innerHTML = "<div>
//             <ul>
//                 <img class="iconos" src="imagen/whatsapp.svg" alt="Icono de WhatsApp">
//                 <a href="https://wa.me/5491130092912">11 3009-2912</a>
//             </ul>

//             <ul>
//                 <img class="iconos" src="imagen/at-solid.svg" alt="Icono @ de e-mail">
//                 <a href="mailto:paezmorayviviana@hotmail.com">paezmorayviviana@hotmail.com</a>
//             </ul>

//             <ul>
//                 <img class="iconos" src="imagen/location-dot-solid.svg" alt="Icono pin de localización en mapa">
//                 <a address>Buenos Aires, Argentina</address></a>
//             </ul>
//         </div>"
//}
// Boton para ver y ocutar información

document.getElementById('botonVer1').addEventListener('click', function(){
   document.getElementById('contacto').style.display = ''; 
});

document.getElementById('botonOcultar1').addEventListener('click', function(){
   document.getElementById('contacto').style.display = 'none'; 
});

document.getElementById('botonVer2').addEventListener('click', function(){
   document.getElementById('perfil').style.display = ''; 
});

document.getElementById('botonOcultar2').addEventListener('click', function(){
   document.getElementById('perfil').style.display = 'none'; 
});

document.getElementById('botonVer3').addEventListener('click', function(){
   document.getElementById('habilidades').style.display = ''; 
});

document.getElementById('botonOcultar3').addEventListener('click', function(){
   document.getElementById('habilidades').style.display = 'none'; 
});

document.getElementById('botonVer4').addEventListener('click', function(){
   document.getElementById('idiomas').style.display = ''; 
});

document.getElementById('botonOcultar4').addEventListener('click', function(){
   document.getElementById('idiomas').style.display = 'none'; 
});

document.getElementById('botonVer5').addEventListener('click', function(){
   document.getElementById('educacion').style.display = ''; 
});

document.getElementById('botonOcultar5').addEventListener('click', function(){
   document.getElementById('educacion').style.display = 'none'; 
});

document.getElementById('botonVer6').addEventListener('click', function(){
   document.getElementById('experiencia').style.display = ''; 
});

document.getElementById('botonOcultar6').addEventListener('click', function(){
   document.getElementById('experiencia').style.display = 'none'; 
});


