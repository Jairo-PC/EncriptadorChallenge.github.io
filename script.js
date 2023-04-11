const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"



function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    btnCopy.style.display = "block"

}

function encriptar(stringEncriptada) {
    const stringEncriptada = matrizCodigo.reduce((acc, [letra, codigo]) => acc.replaceAll(letra, codigo), inputTexto.value.toLowerCase());


    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;

    
}



function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}



async function copiar() {
    mensaje.select();
    try {
        await navigator.clipboard.writeText(mensaje.value);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Texto Copiado',
            showConfirmButton: false,
            timer: 1200,
            width: '20rem',
            height: '25rem',
            padding: '1rem',
            customClass: {
                popup: 'my-popup-class'
                
            }
        });
        mensaje.value = "";
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error al copiar el texto',
            text: error
        });
    }
}
