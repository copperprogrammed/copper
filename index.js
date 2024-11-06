function home() {
    document.getElementById("Logo").style.display = "flex";
    document.getElementById("voorbeeld1").style.display = "none";
    document.getElementById("voorbeeld2").style.display = "none";
    document.getElementById("voorbeeld3").style.display = "none";
}

function shop() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "block";
    document.getElementById("voorbeeld2").style.display = "block";
    document.getElementById("voorbeeld3").style.display = "block";
}