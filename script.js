function getvalue(){
    var a=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var c=Math.floor(Math.random()*256);


    document.getElementById("sp1").innerHTML=a;
    document.getElementById("sp2").innerHTML=b;
    document.getElementById("sp3").innerHTML=c;

    document.body.style.backgroundColor=`rgb(${a},${b},${c})`;
}

var x=document.getElementById("btn");
x.addEventListener("click",getvalue);