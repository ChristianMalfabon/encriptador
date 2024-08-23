const textArea = document.querySelector(".container__textarea");
const muneco = document.querySelector(".aside__imagen");
const spinner =document.querySelector(".spinner");
const asideTitle = document.querySelector(".aside__title");
const asideParrafo = document.querySelector(".aside__parrafo");
const botonEncriptar = document.querySelector(".boton");
const botonDesencriptar = document.querySelectorAll(".boton");
const botonCopiar = document.querySelector(".boton__copiar");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

//función que encripta recorre el mensaje en busca de letras que estén en nuestro arreglo y cuando encuentra una, la reemplaza por la clave
function encriptar (mensaje) {
    let mensajeEncriptado = ""; 
    // recorre cada letra del mensaje
    for (let i= 0; i<mensaje.length; i++) {
        let letra = mensaje[i];
        let letraEncriptada = letra;
        
    //compara las letra con nuestro arreglo y reemplaza las que se encuentran 
    for (let j= 0; j<llaves.length; j++) {
        if(letra === llaves[j][0]){
            letraEncriptada = llaves[j][1];
            break;
        }
    }
    mensajeEncriptado += letraEncriptada;
    }
    
    return mensajeEncriptado;
}

//función que desencriptar, toma el mensaje y lo recorre, con base en nuestro arreglo, cuando encuentra las claves dadas, las reemplaza por la letra correspondiente 
function desencriptarMensaje (mensaje) {
    let mensajeDesencriptado = mensaje
    for (i=0; i<llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    
    }
    return mensajeDesencriptado;
}

//En el textarea pasamos los parametros que no admitimos como mayusculas y acentos y los reemplazamos por minusculas 
textArea.addEventListener("input", (e) => {
    let filtroEscritura = e.target.value
    .toLowerCase()
    .replace(/[áéíóúÁÉÍÓÚ]/g, '')
    .replace(/[^a-z\s]/g, '');
    e.target.value = filtroEscritura; 

    muneco.style.display = "none"; 
    spinner.classList.remove("hidden");
    asideTitle.textContent = "Procesando...";
    asideParrafo.textContent = ""; 
})

//El boton encriptar ejecuta la funcion encriptar al dar click y hacemos manejo de DOM para mostrar el resultado
botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptar (mensaje);
    asideTitle.textContent = "El resultado es:";
    asideParrafo.textContent = mensajeEncriptado;
    spinner.classList.add("hidden");
    botonCopiar.classList.remove("hidden");
    
})

// Boton desencriptar ejecuta la función y hacemos manejo del DOM para mostrar el resultado

botonDesencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    asideTitle.textContent = "El resultado es:";
    asideParrafo.textContent = mensajeDesencriptado;
    spinner.classList.add("hidden");
    botonCopiar.classList.remove("hidden");
    
}) 

// funciones del boton copiar

botonCopiar.addEventListener("click", () =>{
    let copiarTexto = asideParrafo.textContent;
    navigator.clipboard.writeText(copiarTexto).then(() => {
    asideTitle.textContent = "Texto copiado.";
    botonCopiar.classList.add("hidden");
    asideParrafo.textContent = "";
    })
})
