function handleMenuButton() {

    var overlay =  document.getElementById("overlay");

    if(overlay.style.display == "none") {
        overlay.style.display = "block";
        document.getElementById("headContainer").style.backgroundColor = "#3D3939";
        //document.getElementById("footerContainer").style.backgroundColor = "#3D3939";
        document.getElementById("topBar").style.borderBottom = "white solid 3px";
        document.getElementById("bottomBar").style.borderTop = "white solid 3px";
        var texts = document.getElementsByClassName("text");
        for(var i=0; i < texts.length; i++) {
            texts[i].style.color = "white";
        }
        document.getElementById("Logo").style.color = "white";
    } else {
        overlay.style.display = "none";
        document.getElementById("headContainer").style.backgroundColor = "";
        //document.getElementById("footerContainer").style.backgroundColor = "";
        document.getElementById("topBar").style.borderBottom = "";
        document.getElementById("bottomBar").style.borderTop = "";
        var texts = document.getElementsByClassName("text");
        for(var i=0; i < texts.length; i++) {
            texts[i].style.color = "";
        }
        document.getElementById("Logo").style.color = "";
    }
}
