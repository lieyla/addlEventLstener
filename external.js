

 var box1Btn= document.querySelector("#box1Btn");
 box1Btn.addEventListener("click", function() {
    document.getElementById("box1").innerHTML="Don't you think so?"
  document.getElementById("box1").style.backgroundColor="red";
  document.getElementById("box1").style.fontSize="55px";

 } );

var box2Btn= document.querySelector("#box2Btn");
box2Btn.addEventListener("mouseover" , function() {
    document.getElementById("box2").innerHTML= "GOT NEW SKILLS NOW!!!!"
    document.getElementById("box2").style.fontSize= "25px";
    document.getElementById("box2").style.color= "blue";
    document.getElementById("box2").innerText+= "(;(;(;!"
    document.getElementById("box2").style.textJustify= "center";



});

var box3Btn=document.querySelector("#box3Btn");
box3Btn.addEventListener("click" , function(){
    document.getElementById("box3").innerHTML="But the web outweighs them all!"
    document.getElementById("box3").style.fontSize="30px";

});

var box3Btn=document.querySelector("#box4Btn");
box4Btn.addEventListener("click",function(){
    document.getElementById("box4").innerHTML= "Isn't it???"
    document.getElementById("box4").style.backgroundColor="purple";
    document.getElementById("box4").style.color="green";
    document.getElementById("box4").style.fontSize="50px";

});
