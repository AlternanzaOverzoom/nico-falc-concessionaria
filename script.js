function psw() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
 function controllo(){
    var username = document.getElementById("username").value;
    var psw = document.getElementById("password").value;

    if((username === "")||(password === "")){
        alert("inserisci il nome utente/password");
        return false;
    }else if(psw.length < 8){
        alert("la password deve essere lunga almeno 8 caratteri");
        return false;
    }else{
        window.location.href = "index.html";
        return true;
        
    }
 }let slideIndex = 1;
 showSlides(slideIndex);
 
 // Next/previous controls
 function plusSlides(n) {
   showSlides((slideIndex += n));
 }
 
 // Thumbnail image controls
 function currentSlide(n) {
   showSlides((slideIndex = n));
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {
     slideIndex = 1;
   }
   if (n < 1) {
     slideIndex = slides.length;
   }
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
 }