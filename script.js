function openIro(){
    document.getElementById("cover_image").src = "pictures/iro-wo-nakushita-amethyst.png";
    document.getElementById("cover_audio").src = "audio/iro-wo-nakushita-amethyst-preview.mp3";
}

function openRengoku(){
    document.getElementById("cover_image").src = "pictures/rengoku_serenade.jpg";
    document.getElementById("cover_audio").src = "audio/rengoku-serenade-preview.mp3";
}

function openSoleil(){
    document.getElementById("cover_image").src = "pictures/soleil.jpg";
    document.getElementById("cover_audio").src = "audio/soleil-preview.mp3";
}

function openDownload(){
    window.open("download.html");
}

function openScreen(num){
    var s = "menu" + num;
    document.getElementById("menu_screen").src = "pictures/menu" +num + ".jpg";
}

function changeCreator(){
    if (document.getElementById("name").innerHTML=="Ignat"){
        document.getElementById("name").innerHTML = "Timofei";
        document.getElementById("avatar").src = "pictures/timofei.jpg";
        document.getElementById("info").innerHTML = "1st year student of the Faculty of Applied Mathematics and Computer Science at the Belarusian State University, 18 years old";
        document.getElementById("tg").href = "https://t.me/tsumiki09";
        document.getElementById("mail").href = "mailto:karvatskiy.ta@gmail.com"
    }
    else{
        document.getElementById("name").innerHTML = "Ignat";
        document.getElementById("avatar").src = "pictures/ignat.png";
        document.getElementById("info").innerHTML = "Computer science student in BSU(applied computer science)";
        document.getElementById("tg").href = "https://t.me/gribforyou";
        document.getElementById("mail").href = "mailto:lazovikignat@gmail.com"

    }
}

function navig(a){
    switch(a){
        case 1:
            window.location.replace('#score');
            break;
        case 2:
            window.location.replace('#combo');
            break;
        case 3:
            window.location.replace('#grade');
    }
}