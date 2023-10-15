
function friendper(){
    var percentage=Math.floor(Math.random()*100) ;
     document.getElementById('textin').value=percentage+" %";
     if (percentage>70)
   {
    document.querySelector("h1").innerHTML="You both are true friends !";
   }
   else if(percentage>30 || percentage<=70)
   {
    document.querySelector("h1").innerHTML="Your friendship starts growing !";
   }
   else
   {
    document.querySelector("h1").innerHTML="Stay always happy !";
   }
}