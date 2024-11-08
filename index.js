function home() {
    document.getElementById("Logo").style.display = "flex";
    document.getElementById("voorbeeld1").style.display = "none";
    document.getElementById("voorbeeld2").style.display = "none";
    document.getElementById("voorbeeld3").style.display = "none";
    document.getElementById("voorbeeld4").style.display = "none";
    document.getElementById("voorbeeld5").style.display = "none";
    document.getElementById("voorbeeld6").style.display = "none";
    document.getElementById("contactinformation").style.display = "none";
}

function shop() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "block";
    document.getElementById("voorbeeld2").style.display = "block";
    document.getElementById("voorbeeld3").style.display = "block";
    document.getElementById("voorbeeld4").style.display = "block";
    document.getElementById("voorbeeld5").style.display = "block";
    document.getElementById("voorbeeld6").style.display = "block";
    document.getElementById("contactinformation").style.display = "none";
}

function contact() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "none";
    document.getElementById("voorbeeld2").style.display = "none";
    document.getElementById("voorbeeld3").style.display = "none";
    document.getElementById("voorbeeld4").style.display = "none";
    document.getElementById("voorbeeld5").style.display = "none";
    document.getElementById("voorbeeld6").style.display = "none";
    document.getElementById("contactinformation").style.display = "block";
}

function show() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "block";
    document.getElementById("voorbeeld2").style.display = "block";
    document.getElementById("voorbeeld3").style.display = "block";
    document.getElementById("voorbeeld4").style.display = "block";
    document.getElementById("voorbeeld5").style.display = "block";
    document.getElementById("voorbeeld6").style.display = "block";
    document.getElementById("contactinformation").style.display = "none";
}

function image() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "block";
    document.getElementById("voorbeeld2").style.display = "none";
    document.getElementById("voorbeeld3").style.display = "none";
    document.getElementById("voorbeeld4").style.display = "none";
    document.getElementById("voorbeeld5").style.display = "none";
    document.getElementById("voorbeeld6").style.display = "block";
    document.getElementById("contactinformation").style.display = "none";
}

function info() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "none";
    document.getElementById("voorbeeld2").style.display = "block";
    document.getElementById("voorbeeld3").style.display = "none";
    document.getElementById("voorbeeld4").style.display = "none";
    document.getElementById("voorbeeld5").style.display = "none";
    document.getElementById("voorbeeld6").style.display = "none";
    document.getElementById("contactinformation").style.display = "none";
}

function music() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "none";
    document.getElementById("voorbeeld2").style.display = "none";
    document.getElementById("voorbeeld3").style.display = "block";
    document.getElementById("voorbeeld4").style.display = "none";
    document.getElementById("voorbeeld5").style.display = "none";
    document.getElementById("voorbeeld6").style.display = "none";
    document.getElementById("contactinformation").style.display = "none";
}

function video() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "none";
    document.getElementById("voorbeeld2").style.display = "none";
    document.getElementById("voorbeeld3").style.display = "none";
    document.getElementById("voorbeeld4").style.display = "block";
    document.getElementById("voorbeeld5").style.display = "none";
    document.getElementById("voorbeeld6").style.display = "none";
    document.getElementById("contactinformation").style.display = "none";
}

function link() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("voorbeeld1").style.display = "none";
    document.getElementById("voorbeeld2").style.display = "none";
    document.getElementById("voorbeeld3").style.display = "none";
    document.getElementById("voorbeeld4").style.display = "none";
    document.getElementById("voorbeeld5").style.display = "block";
    document.getElementById("voorbeeld6").style.display = "none";
    document.getElementById("contactinformation").style.display = "none";
}

function copy() {
    // Get the text field
    var copyText = document.getElementById("DiscordLink");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  function copy1() {
    // Get the text field
    var copyText = document.getElementById("MailLink");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }