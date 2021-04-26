function toggleMenu(){
    var menuBox = document.getElementById('navbar');    
    if(menuBox.style.display == "flex") { // if is menuBox displayed, hide it
        menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
        menuBox.style.display = "flex";
    }

    var textBox = document.getElementById('title')
    if(textBox.style.display == "none"){
        textBox.style.display = "inline-block"
    }
    else{
        textBox.style.display = "none"
    }
}