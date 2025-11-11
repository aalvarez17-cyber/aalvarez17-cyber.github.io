function init(){
  let userText = document.getElementById("entryinput").value;
  document.getElementById("textoutput").innerHTML = userText;
  //Alert Box
  alert("Hello Alexis: " + userText);
  window.addEventListener('load', init);
}

let objCreate = document.getElementById("entrybutton");
objCreate.addEventListener("click", init);
