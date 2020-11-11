function scroll() {
    var Header = document.getElementById('header');
    var Songly = document.getElementById('Songly');
    var Canciones = document.getElementById('canciones');
    var Acordes = document.getElementById('acordes');
    var Menu = document.getElementById('menu');
     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
        {Header.style.backgroundColor = "#fff";
         Header.style.boxShadow = "0px 0px 100px #0000001A";
         Header.style.height = "12vh";
         Songly.style.color = "#ff4040";
         Songly.style.marginRight = "10rem";
         Canciones.style.color = "black";
         Acordes.style.color = "black";
         Menu.style.color = "black";}
else {Header.style.backgroundColor = "transparent";
         Header.style.boxShadow = "none";
         Header.style.height = "20vh";
         Songly.style.marginRight = "0rem"
         Songly.style.color = "#FFF";
         Canciones.style.color = "white";
         Acordes.style.color = "white";
         Menu.style.color = "white";}}