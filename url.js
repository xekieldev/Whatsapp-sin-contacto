let n= document.getElementById("numero");

function Wh(){
    
    let url ="https://api.whatsapp.com/send?phone=54"+n.value;
    window.location.href= url;

}
