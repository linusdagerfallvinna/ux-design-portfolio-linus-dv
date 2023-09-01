
var currentBoxNum = 1;

//Byter ut innehållet till information om projektet Chas Academy
function chas() {
    document.getElementById('wideversion_big_gallery_image').src = "images/chasacademy.png";
    document.getElementById('gallery_title').innerHTML = "Redesign of Chas Academy";
    document.getElementById('readmore_btn').href = "work.html#2"
    document.getElementById('wide_paragraph').innerHTML = "We were given a task to develop a prototype for a website.<br><br> We chose to redesign our school's website (Chas Academy AB). We focused on the desktop version but we also...";
}

//Byter ut innehållet till information om projektet Figma
function figma() {
    document.getElementById('wideversion_big_gallery_image').src = "images/sjostaden_banner2.png";
    document.getElementById('gallery_title').innerHTML = "Redesign of Sjöstaden Skybar";
    document.getElementById('readmore_btn').href = "work.html#8"
    document.getElementById('wide_paragraph').innerHTML = "In this project I redesigned the website of one of the highest located restaurants in Stockholm, Sjöstaden Skybar. <br><br> I have recorded my presentation for the company where I pitch my suggestions for improvements.";
}

//Byter ut innehållet till information om projektet WJC 2024
function hockey() {
    document.getElementById('wideversion_big_gallery_image').src = "images/dack_thumb.png";
    document.getElementById('gallery_title').innerHTML = "REQUIREMENTS MANAGEMENT OF DÄCKSKIFTAREN";
    document.getElementById('readmore_btn').href = "work.html#9"
    document.getElementById('wide_paragraph').innerHTML = "Vi fick ett uppdrag att skapa en digital tjänst som skulle underlätta med däckskifte för privatpersoner och verkstäder av de fiktiva investerarna HarMycketPengar AB.<br><br> Investmentbolaget idetifierade ett behov på marknaden för privatpersoner att kunna boka skifte av däck inför vinter- och sommarsäsongen och anlitade därför oss.";
}

//Byter ut innehållet till information om projektet Chas Academy för liten skärm
function chas2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/chasacademy.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "Redesign of Chas Academy";
    document.getElementById('readmore_btn_small').href = "work.html#2"
    document.getElementById('small_paragraph').innerHTML = "We were given a task to develop a prototype for a website. We chose to redesign our school's website (Chas Academy AB). We focused on the desktop version but we also made 3 detailed wireframes for mobile.";
}

//Byter ut innehållet till information om projektet Figma för liten skärm
function figma2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/sjostaden_banner2.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "Redesign of Sjöstaden Skybar";
    document.getElementById('readmore_btn_small').href = "work.html#8"
    document.getElementById('small_paragraph').innerHTML = "In this project I redesigned the website of one of the highest located restaurants in Stockholm, Sjöstaden Skybar. I have recorded my presentation for the company where I pitch my suggestions for improvements.";
}

//Byter ut innehållet till information om projektet WJC 2024 för liten skärm
function hockey2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/dack_thumb.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "REQUIREMENTS MANAGEMENT OF DÄCKSKIFTAREN";
    document.getElementById('readmore_btn_small').href = "work.html#9"
    document.getElementById('small_paragraph').innerHTML = "Vi fick ett uppdrag att skapa en digital tjänst som skulle underlätta med däckskifte för privatpersoner och verkstäder av de fiktiva investerarna HarMycketPengar AB.";
}


//Sätter en röd ram runt den markerade bilden
function changeColor(boxNum) {
    console.log(currentBoxNum);
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderColor = "#17202D";
    currentBoxNum = boxNum;
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderColor = "#F2478D";
}

document.getElementById("wideversion_gallery_box1").addEventListener("click", function () { changeColor(1); });
document.getElementById("wideversion_gallery_box2").addEventListener("click", function () { changeColor(2); });
document.getElementById("wideversion_gallery_box3").addEventListener("click", function () { changeColor(3); });



//Sätter en röd ram runt den markerade bilden för liten skärm
function changeColor2(boxNum) {
    console.log(currentBoxNum);
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderColor = "#17202D";
    currentBoxNum = boxNum;
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderColor = "#F2478D";
}

document.getElementById("smallversion_gallery_box1").addEventListener("click", function () { changeColor2(1); });
document.getElementById("smallversion_gallery_box2").addEventListener("click", function () { changeColor2(2); });
document.getElementById("smallversion_gallery_box3").addEventListener("click", function () { changeColor2(3); });
