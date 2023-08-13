var slideIndex = 0;
var picSlideIndex = 0;
var slideIndexB;
let timeoutId;
showSlides();

function currentSlide(n) {
  
  showSlides(slideIndex=n);
}
function copyMail() {
  // Get the text field
  var copyText = document.getElementById("Email");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Nyomj az OK-ra hogy kimásold a parlament E-mail címét");
}
function showSlides() {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    if(slideIndex!=i){dots[i].style="background-color: rgb(0, 147, 221);;";}
  }
  
  slideIndex++;
  slideIndexB++;
  if (slideIndex > slides.length) 
  { 
  slideIndex = 1
}    
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].style= "background-color: antiquewhite;";
  
  timeoutId=setTimeout(showSlides, 3000); 
}
var myWindow;	
var status=0;

function closeWin() {
  myWindow.close();
}
function myFunction(obj){
var varos = obj.value;
var stat=0;
document.getElementsByName("iframe_name")[0].src="https://naslovi.net/vremenska-prognoza/"+varos;
var text="";
switch(szak){
case "Informatika":szak="Informatika";text="&#8226;Avala-torony</br>&#8226;Virágház</br>&#8226;Gárdos torony</br>&#8226;Nikola Tesla Múzeum</br>&#8226;Crkva Svetog Marka</br>&#8226;Knez Mihailova út</br>&#8226;Szent Száva-templom";break;
case "Gepeszet":szak="Gepeszet";text="&#8226;Ovčar-Kablar-szurdok</br>&#8226;Szent Miklós-kolostor</br>&#8226;A látogatás kolostora</br>&#8226;Nemzeti Múzeum</br>&#8226;Umetnička Galéria „Nadežda Petrović”";break;
case "Mehatronika":szak="Mehatronika";text="&#8226;Nemzeti Park</br>&#8226;Hegyi központ";break;
case "Elektronika":szak="Elektronika";text="&#8226;Assisi Szent Ferenc Katolikus Plébánia</br>&#8226;Nemzeti Múzeum</br>&#8226;Szentháromság Kolostor</br>&#8226;Suvača";break;
case "mernoki menedzsment":szak="mernoki menedzsment";text="&#8226;Stari Ras</br>&#8226;Sopoćani kolostor</br>&#8226;đurđevi Stupovi</br>&#8226;Szent Péter és Pál apostolok temploma</br>&#8226;Novi Pazar erődje";break;
}
	if(stat==1){closeWin();stat=0;}
	myWindow = window.open("", "myWindow", "width=350,height=300,left=1000,top=200,status=no,toolbar=no,titlebar=no");
	myWindow.document.write('<html><head>');
	myWindow.document.write('<meta charset="UTF-8">');
    myWindow.document.write('<link rel="stylesheet" href="files/window.css" type="text/css" />');
    myWindow.document.write('</head><body>');
    myWindow.document.write("<h1>"+varos+"</h1>");
	myWindow.document.write("<p style='font-weight:bold;'>Turisztikai látványosságok:</p>");
	myWindow.document.write("<p>"+text+"</p>");
	myWindow.document.write("<h1></h1>");
    myWindow.document.write('</body></html>');
	stat=1;
}