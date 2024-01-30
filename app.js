let mensaje;
let mensajeCapturado;

//Creo una funcion para quitar la imagen Cuando tenga que remplazarla por el texto
function SacarImagen() {
    let imagen = document.querySelector("#imagenprincipal");
    imagen.style.display = "none";
}

//Creo una funcion para capturar el mensaje ingresado
function Capturar() {
    mensaje = document.querySelector("#mensaje-normal");
    let mensajeCapturado = mensaje.value;
    if (/^[a-z0-9\s]+$/.test(mensajeCapturado)) {
        return mensajeCapturado.trim();
    } else {
        alert("Ingrese solo letras minúsculas y sin números en el mensaje");
        throw new Error("Mensaje contiene letras mayúsculas o números");
    }
}


//Creo la funcion para Encriptar el mensaje
function Encriptar() {
    Capturar();

    if (Capturar() !== "") {
        

        encriptado = document.querySelector("#mensaje-encriptado");
        encriptado.textContent = Capturar()
            .replace(/a/gi, 'ai')
            .replace(/e/gi, 'enter')
            .replace(/i/gi, 'imes')
            .replace(/o/gi, 'ober')
            .replace(/u/gi, 'ufat');

        SacarImagen()
        encriptado.style.display = "block";
    } else {
        alert("Ingrese un mensaje por favor");
    }
}

function Desencriptar() {

    Capturar() ;

    if (Capturar() !== "") {
        

        desencriptado = document.querySelector("#mensaje-encriptado");
        desencriptado.textContent = Capturar()
            .replace(/ufat/gi, 'u')
            .replace(/ober/gi, 'o')
            .replace(/imes/gi, 'i')
            .replace(/enter/gi, 'e')
            .replace(/ai/gi, 'a');

        SacarImagen();

        encriptado.style.display = "block";

    } else {
        console.log("No hay mensaje encriptado para desencriptar.");
    }
}


