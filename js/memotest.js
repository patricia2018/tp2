var array=[0,1,2,3,4,5,0,1,2,3,4,5];
var arrayModificado = shuffle(array);
var primerClick=null;
var segundoClick=null;
var intentos =24;
var cantFichasSeccionadas=0

//console.log(array)
//console.log(shuffle(array))
function shuffle(a) {
    var j, x ;
    for (var i =0 ; i< a.length ; i++) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
 
    return a;

}

for ( var i=0 ;i<arrayModificado.length ;i++){
	var imagen= `<img class="cartaOculta" src="img/carta${arrayModificado [i]}.jpg">`;//arrayModificado[i] , contenido.
	//cree la imagenarrayModificado 
       arrayModificado 
     $("#cartaDorso"+i).append(imagen);
}

  function darVuelta(primerClick,segundoClick){
        primerClick.children().toggleClass("cartaOculta cartaMostrada")
     	segundoClick.children().toggleClass("cartaOculta cartaMostrada")
        console.log( primerClick.children())
}
 



$("td").on("click", function(e){ //EVENTO

//console.log(this)
//console.log($(this).parent().children().first(	))

//com esto me traigo la imagen
$(this).children().toggleClass("cartaOculta cartaMostrada")//ambas clases 

if(primerClick ==null){

	     primerClick=$(this) //guarde en la variable creada, el primer click

}else{
        segundoClick=$(this)

        //console.log(primerClick.children().first().attr("src"))

     if( primerClick.children().attr("src") ==segundoClick.children().attr("src")) {
          console.log("Son Iguales")
     } else{


     	setTimeout(darVuelta,1500, primerClick,segundoClick)//para tiempo
             intentos--;
            console.log($('#intentosP'))
             $('#intentosP').text(intentos );
            console.log("Son Distintos")
     }

      primerClick=null;//los reseteo , asi sean igules o distintos, para la proxima ronda!
      segundoClick=null;       

}


})

//nombre del jugador
var nombre = prompt("Nombre del jugador");
console.log(nombre);
//console.log(document.getElementById('nombrea'))
//document.getElementById('nombrea').html='Nombre de jugador: ' + nombre;
console.log($("#nombrea"))

$("#nombrea").text(nombre);



