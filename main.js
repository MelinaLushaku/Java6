
function shtoLajmin(){
  
  var divi = document.createElement("div");
  divi.className="form-group";
  var img2 = document.createElement("img");
  img2.src = "unnamed.jpg";
  img2.className="foto-lajmi";
  divi.appendChild(img2);
  var x = document.getElementById('titulli-new');
  var defV = x.defaultValue;
  var cV = x.value;

  var title = document.createElement("h3");
 //Menyra per te ndryshuar fontFamily te titujve nga JS
 // title.style.fontFamily = "Lucida Console, Courier, monospace";
  var titleText = document.createTextNode(cV);
      
  title.appendChild(titleText);
  divi.appendChild(title);
  

 var y = document.getElementById('permbajtja-new');
 var defVV = y.defaultValue;
  var cVV = y.value;
 var teksti = document.createElement("p");
  var text = document.createTextNode(cVV);
  
  teksti.appendChild(text)
  divi.appendChild(teksti);

  var z = document.createElement('h6');
  var data = document.createTextNode("data");
  z.appendChild(data);
  divi.appendChild(z);

  
  var element = document.getElementById("right-side")
  element.prepend(divi);

 //Kodi per t'u fshir elementi i fundit
  var nr = element.childElementCount;
  
    
  if(nr == 7){
    
    element.removeChild(element.lastElementChild);
}



 /* var l = document.getElementById("right-side").lastChild.innerHTML;
  element.removeChild(l);*/
  
  


 /* var nr5 = document.getElementsByClassName('form-group');
  var parent = document.getElementsByClassName('right-side');
  parent.removeChild(nr5);*/
 
   
  
}
