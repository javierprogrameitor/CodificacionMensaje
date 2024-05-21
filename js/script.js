let miBoton = document.getElementById("miBoton");
let imagen1 = document.getElementById("img");
let imagen2 = document.getElementById("img2");
let boton = document.getElementById("boton");
let alternar = false; // Inicialmente, imagen1 está visible

miBoton.addEventListener("click", function (){
    let entradaUsuario = prompt("Introduce una frase?");
    desplazarCaracteres(entradaUsuario);
}); 

 function desplazarCaracteres(frase){

    let caracteres = frase.split('');

    for(let i = 0; i < caracteres.length; ++i) {
        let diferencia = caracteres[i].charCodeAt() - 'A'.charCodeAt();
        diferencia = (diferencia + 1) % 26;

        let numero = caracteres[i].charCodeAt();
        if(!isNaN(numero)){
            let numeroSiguiente = numero +1;
            caracteres[i] = numeroSiguiente;
        }
        caracteres[i] = String.fromCharCode(diferencia + 'A'.charCodeAt());
        
    }

    alert(caracteres.join(''));
};

boton.addEventListener("click", function () {
    if (alternar) {
        imagen1.style.display = "block";
        imagen2.style.display = "none";
    } else {
        imagen1.style.display = "none";
        imagen2.style.display = "block";
    }
    
    alternar = !alternar; // Cambiar el estado de alternar
});



