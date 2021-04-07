/* function menu(){
    var bar = document.getElementById("lineas");
    var ele = document.getElementById("item");
    if (bar.style.display === "none") {
        bar.style.display = "flex";
    } else {
        bar.style.display = "none";
    }
} */

$('#toggle-menu').hover(function(){
    document.getElementById("lineas").style.display="block";
})


$('#solar-ancla').hover(function(){
    document.getElementById("solar").style.display="block";
    document.getElementById("industrial").style.display="none";
})

$('#industrial-ancla').hover(function(){
    document.getElementById("solar").style.display="none";
    document.getElementById("industrial").style.display="block";
})
