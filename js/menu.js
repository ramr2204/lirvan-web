function menu(){
    var bar = document.getElementById("lineas");
    var ele = document.getElementById("item");
    if (bar.style.display === "none") {
        bar.style.display = "flex";
    } else {
        bar.style.display = "none";
    }
} 

$('#toggle-menu').hover(function(){
    document.getElementById("lineas").style.display="block";
    document.getElementById("nav").style.backgroundColor="#312f2e";
    document.getElementById("main").style.opacity = "0.4"; 
})
$('#close-menu').click(function(){
    document.getElementById("lineas").style.display="none";
    document.getElementById("nav").style.backgroundColor="#FFFFFF00";
    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementById("main").style.opacity = "1"; 
})

$('#solar-ancla').hover(function(){
    document.getElementById("solar").style.display="block";
    document.getElementById("industrial").style.display="none";
    document.getElementById("alumbrado").style.display="none";
    document.getElementById("tubos").style.display="none";
    document.getElementById("panel").style.display="none";
    document.getElementById("postes").style.display="none";
})

$('#industrial-ancla').hover(function(){
    document.getElementById("solar").style.display="none";
    document.getElementById("industrial").style.display="block";
    document.getElementById("alumbrado").style.display="none";
    document.getElementById("tubos").style.display="none";
    document.getElementById("panel").style.display="none";
    document.getElementById("postes").style.display="none";
})
$('#alumbrado-ancla').hover(function(){
    document.getElementById("alumbrado").style.display="block";
    document.getElementById("solar").style.display="none";
    document.getElementById("industrial").style.display="none";
    document.getElementById("tubos").style.display="none";
    document.getElementById("panel").style.display="none";
    document.getElementById("postes").style.display="none";
    
})
$('#tubos-ancla').hover(function(){
    document.getElementById("tubos").style.display="block";
    document.getElementById("alumbrado").style.display="none";
    document.getElementById("solar").style.display="none";
    document.getElementById("industrial").style.display="none";
    document.getElementById("panel").style.display="none";
    document.getElementById("postes").style.display="none";
    
})
$('#panel-ancla').hover(function(){
    document.getElementById("panel").style.display="block";
    document.getElementById("tubos").style.display="none";
    document.getElementById("alumbrado").style.display="none";
    document.getElementById("solar").style.display="none";
    document.getElementById("industrial").style.display="none";
    document.getElementById("postes").style.display="none";
    
})
$('#postes-ancla').hover(function(){
    document.getElementById("postes").style.display="block";
    document.getElementById("panel").style.display="none";
    document.getElementById("tubos").style.display="none";
    document.getElementById("alumbrado").style.display="none";
    document.getElementById("solar").style.display="none";
    document.getElementById("industrial").style.display="none";
    
})

$(document).ready(function(){
    var $cabecera = $('#navbar');
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > previousScroll && scroll > 120){
           $cabecera.addClass('nav-scroll');
   
       } else {
           $cabecera.removeClass('nav-scroll');
       }
       previousScroll = scroll;    });
       
  });

  /*let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-750px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}*/
