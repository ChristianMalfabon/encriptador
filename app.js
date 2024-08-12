const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptar (mensaje) {
    let mensajeEncriptado = ""; 
    // recorre cada letra del mensaje
    for (let i= 0; i<mensaje.length; i++) {
        let letra = mensaje[i];
        let letraEncriptada = letra;
        
    //compara las letra con nuestro arreglo y reemplaza las que se encuentran 
    for (let j= 0; j<llaves.length; j++) {
        if(letra === llaves[j][0]){
            letraEncriptada === llaves[j][1];
            break;
        }
    }
    mensajeEncriptado += letraEncriptada;
    }
    
    return mensajeEncriptado;
}
 encriptar ("hola");
 
