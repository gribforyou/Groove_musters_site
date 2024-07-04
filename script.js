function openIro(){
    document.getElementById("cover_image").src = "iro-wo-nakushita-amethyst.png";
    document.getElementById("cover_audio").src = "iro-wo-nakushita-amethyst-preview.mp3";
}

function openRengoku(){
    document.getElementById("cover_image").src = "rengoku_serenade.jpg";
    document.getElementById("cover_audio").src = "rengoku-serenade-preview.mp3";
}

function openSoleil(){
    document.getElementById("cover_image").src = "soleil.jpg";
    document.getElementById("cover_audio").src = "soleil-preview.mp3";
}

function openDownload(){
    window.open("download.html");
}

function openScreen(num){
    var s = "menu" + num;
    document.getElementById("menu_screen").src = "menu" +num + ".jpg";
}