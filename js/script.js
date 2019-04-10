function init(){
  //add your javascrip between these two lines of code
   
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', function (event){
    var message = document.getElementById('entryinput').value;
    alert("Emma Prager: " + message);
    document.getElementById('textoutput').innerHTML = message;
    console.log(message);
  })

  }

  var window = document.getElementById('entrybutton');
  window.addEventListener('load', init);