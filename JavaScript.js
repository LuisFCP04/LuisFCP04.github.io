function CambiarColor(){
    document.getElementById("div1").style.color = "red";
}

function CambiarColor2(){
    document.getElementById("div1").style.color = "black";
}

function Total(precio){

 var total = document.getElementById("total").value;
 
 var num = parseInt(total);
 num += parseInt(precio);

 document.getElementById("total").value = num.toString();

}