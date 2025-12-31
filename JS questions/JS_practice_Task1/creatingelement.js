var btn=document.querySelector("button");
var main =document.querySelector("main");

var arr=["Nani","Vijay Devarakonda","Allu Arjun","Mahesh Babu","Ram Charan","Jr NTR","Prabhas","Rana Daggubati","Ajith","Vikram","Suriya","Dhanush","Karthi","Sivakarthikeyan"];
btn.addEventListener("click",function(){
    var b = document.createElement("h1");
    var actor=Math.floor(Math.random()*arr.length);
    var top=Math.floor(Math.random()*80);
    var left=Math.floor(Math.random()*80);
    var rot=Math.floor(Math.random()*360);
    var cl= Math.floor(Math.random()*256);
    var c2= Math.floor(Math.random()*256);
    var c3= Math.floor(Math.random()*256);
    b.style.color=`rgb(${cl},${c2},${c3})`;
    b.style.rotate=rot+"deg";
    b.style.top=top+"%";
    b.style.left=left+"%";
    b.innerHTML=arr[actor];
    b.style.position="absolute";
    main.appendChild(b);
    console.log(actor);
})