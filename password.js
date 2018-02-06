

var letras = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz";
var numeros = "012345678901234567890123456789012345678901234567";
var simbolos = "!·$%&/()=?¿¡!·$%&/()=?¿¡!·$%&/()=?¿¡!·$%&/()=?¿¡";

var array_caracteres = [];

var generar_contrasenya = function() {

// Comprobando los checkbox
var chLetras = document.getElementById("letras").checked;
var chNumeros = document.getElementById("numeros").checked;
var chSimbolos = document.getElementById("simbolos").checked;

// Define el array de caracteres que va a utilizar la contraseña
if (chLetras && chNumeros && chSimbolos) {
  array_caracteres = [letras, numeros, simbolos];
} else if (!chLetras && chNumeros && chSimbolos) {
  array_caracteres = [numeros, simbolos];
} else if (chLetras && !chNumeros && chSimbolos) {
  array_caracteres = [letras, simbolos];
} else if (chLetras && chNumeros && !chSimbolos) {
  array_caracteres = [letras, numeros];
} else if (!chLetras && !chNumeros && chSimbolos) {
  array_caracteres = [simbolos];
} else if (chLetras && !chNumeros && !chSimbolos) {
  array_caracteres = [letras];
} else if (!chLetras && chNumeros && !chSimbolos) {
  array_caracteres = [numeros];
}

// Elemento aleatorio del array_caracteres
function genera_elemento_aleatorio() {
  var array_aleatorio = array_caracteres[Math.floor(Math.random()*array_caracteres.length)];
  return array_aleatorio;
};
var password = "";
var inputLength = document.getElementById("inputLength").value
for (i = 0; i < inputLength; i++) {
  password += genera_elemento_aleatorio().charAt(Math.floor(Math.random()*(genera_elemento_aleatorio().length)));
}
document.getElementById("contrasenya").value = password;
}

// Copiar contraseña al portapapeles

function copiar_contrasenya() {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("contrasenya").value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
