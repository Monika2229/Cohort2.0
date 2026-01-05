var btn=document.querySelector("button");
var main =document.querySelector("main");

btn.addEventListener("click",function(){
    var div = document.createElement("div");
    var x=Math.floor(Math.random()*80);
    var y=Math.floor(Math.random()*80);
    var rot=Math.floor(Math.random()*360);
    var cl= Math.floor(Math.random()*256);
    var c2= Math.floor(Math.random()*256);
    var c3= Math.floor(Math.random()*256);
    div.style.backgroundColor=`rgb(${cl},${c2},${c3})`;
    div.style.width = "100px";          
    div.style.height = "100px";
    div.style.rotate=rot+"deg";
    div.style.top=x+"%";
    div.style.left=y+"%";
    div.style.position="absolute";
    main.appendChild(div);
})