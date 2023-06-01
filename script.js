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
 }
 function openNav() {
  document.getElementById("side-nav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("side-nav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
  
  
