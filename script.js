function alerta() {
    alert ("Que hay de nuevo?");
}

function ejecuta() {

    /*
        for(var i=0;i<3;i++) {
            document.getElementsByTagName("p")[i].onclick=alerta;
        }
        document.getElementById("importante").onclick=alerta;

         var x=document.getElementsByClassName("importante")[0].onclick=alerta;
    */
    // document.querySelector(".importante").onclick=alerta;
    // document.querySelector("#principal p:last-child").onclick=alerta;
    
    var elementos=document.querySelectorAll("#principal p, span");

    for(var i=0; i<elementos.length; i++){
        elementos[i].onclick=alerta;
    }
}
window.onload= ejecuta;