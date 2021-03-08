function menu(){
    var bar = document.getElementById("lineas");
    var ele = document.getElementById("item");
    if (bar.style.display === "none") {
        bar.style.display = "flex";
    } else {
        bar.style.display = "none";
    }
}