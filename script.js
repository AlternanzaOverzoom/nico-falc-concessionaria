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
        window.location.href = "homepage.html";
        return true;
        
    }
 }
  function cambiaColore() {
    let img1 = document.getElementById("ico").src;
    
  }
  function cambiaColore2(){
    document.getElementById("ico").src = "cartellafoto/CasaBianca.png";
  }
