//JavaScript Document
function myFunction() {
  var txt;
  if (confirm("You have subscribed")) {
    txt = "You pressed OK!";
  } 
  document.getElementById("demo").innerHTML = txt;
}