let n= document.getElementById("numero");
const $numero = document.querySelector("#numero");

// Escuchamos el keydown y prevenimos el evento
$numero.addEventListener("keydown", (evento) => {
	if (evento.key == "Enter") {
		// Prevenir
		evento.preventDefault();
		return false;
	}
});


function Wh(){
    
    let cod= document.querySelector('#pais').value;
    console.log(cod);
    let url ="https://api.whatsapp.com/send?phone="+cod+n.value;
    window.location.href= url;

}
