let mensaje;
let mensajeCapturado;

//Creo una funcion para quitar la imagen Cuando tenga que remplazarla por el texto
function SacarImagen() {
    let imagen = document.querySelector("#imagenprincipal");
    imagen.style.display = "none";
}

// //Creo una funcion para capturar el mensaje ingresado
// function Capturar() {
//     mensaje = document.querySelector("#mensaje-normal");
//     let mensajeCapturado = mensaje.value;
//     if (/^[a-z0-9\s]+$/.test(mensajeCapturado) && mensajeCapturado !== "") {
//         return mensajeCapturado.trim();
//     } else {
//         encriptado = document.querySelector("#contenedor-secreto");
//         encriptado.style.display = "none";
//         let imagen = document.querySelector("#imagenprincipal");
//         imagen.style.display = "block";
//         alert("Ingrese un mensaje por favor");
//         throw new Error("Mensaje contiene letras mayúsculas o caracteres especiales");
//     }
// }

function Capturar() {
    mensaje = document.querySelector("#mensaje-normal");
    let mensajeCapturado = mensaje.value;

    if (/^[a-z0-9\s]+$/.test(mensajeCapturado) && mensajeCapturado !== "") {
        return mensajeCapturado.trim();
    } else {
        var modal = document.getElementById("myModal");
        var body = document.getElementsByTagName("body")[0];

        // Mostrar el modal de error
        var errorContent = document.getElementById("errorContent");
        errorContent.innerHTML = "Ingrese un mensaje por favor";
        modal.style.display = "block";

        body.style.position = "fixed";
        body.style.height = "100%";
        body.style.overflow = "hidden";

        // Devolver un valor que indique un error
        return false;
    }
}

// Código para cerrar el modal
if (document.getElementById("btnModal")) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}




//Creo la funcion para Encriptar el mensaje
function Encriptar() {
    var mensajeOriginal = Capturar();

    if (mensajeOriginal !== "") {
        var encriptado = document.querySelector("#mensaje-encriptado");

        // Definir el mapeo de reemplazo
        const reemplazos = {
            'u': 'ufat',
            'o': 'ober',
            'i': 'imes',
            'e': 'enter',
            'a': 'ai'
            
        };

        // Aplicar el mapeo de reemplazo
        var mensajeEncriptado = mensajeOriginal.replace(/[uoiea]/gi, match => reemplazos[match.toLowerCase()]);

        // Mostrar el mensaje encriptado en el elemento
        encriptado.textContent = mensajeEncriptado;

        // sacar una imagen
        SacarImagen();
        var contenedor = document.querySelector("#contenedor-secreto");
        // Mostrar el elemento encriptado
        contenedor.style.display = "block";
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

        desencriptado.style.display = "block";

    } else {
        console.log("No hay mensaje encriptado para desencriptar.");
    }
}



    function copiarMensaje() {
        // Selecciona el elemento con el mensaje desencriptado
        var mensajeEncriptado = document.querySelector("#mensaje-encriptado");
    
        // Selecciona el contenido del elemento
        var contenido = mensajeEncriptado.textContent || mensajeEncriptado.innerText;
    
        try {
            // Crea un área de transferencia y copia el contenido
            var textarea = document.createElement('textarea');
            textarea.value = contenido;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
    
            // Creo un alerta del mensaje copiado
            alert('Mensaje copiado al portapapeles');
        } catch (err) {
            console.error('No se pudo copiar al portapapeles:', err);
        }
    }
    


