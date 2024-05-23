let imagen1 = document.getElementById("img1");
let imagen2 = document.getElementById("img2");
let boton = document.getElementById("boton");
let miBoton = document.getElementById("miBoton");
let alternar = true; // Inicialmente, imagen1 está visible

miBoton.addEventListener("click", function() {
    let entradaUsuario = prompt("Introduce una frase");
    if (entradaUsuario) {
        desplazarCaracteres(entradaUsuario);
    }
});

function desplazarCaracteres(frase) {
    let caracteres = frase.split('');

    for (let i = 0; i < caracteres.length; ++i) {
        let codigo = caracteres[i].charCodeAt();

        // Desplazar solo letras mayúsculas y minúsculas
        if (codigo >= 65 && codigo <= 90) { // Letras mayúsculas
            caracteres[i] = String.fromCharCode((codigo - 65 + 1) % 26 + 65);
        } else if (codigo >= 97 && codigo <= 122) { // Letras minúsculas
            caracteres[i] = String.fromCharCode((codigo - 97 + 1) % 26 + 97);
        } else if (codigo >= 48 && codigo <= 57) { // Números
            caracteres[i] = String.fromCharCode((codigo - 48 + 1) % 10 + 48);
        }
    }

    alert(caracteres.join(''));
}

boton.addEventListener("click", function() {
    if (alternar) {
        imagen1.style.display = "none";
        imagen2.style.display = "block";
    } else {
        imagen1.style.display = "block";
        imagen2.style.display = "none";
    }
    alternar = !alternar; // Cambiar el estado de alternar
});
