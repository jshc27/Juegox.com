var opcion1 = "Piedra";
var opcion2 = "Papel";
var opcion3 = "Tijera";

//Creamos una funcion de expresion o anonima.

var resultado = function(user, machine) {

    if(user != machine ){
        if(user === opcion1 && machine === opcion3) {
            console.log('El usuario GANO con ' + opcion1);
        } else if (user === opcion2 && machine === opcion1) {
            console.log('El usuario GANO con ' + opcion2);
        } else if ( user === opcion3 && machine === opcion2) {
            console.log('El usuario GAN0 con ' + opcion3);
        } else {
            console.log('Gano la maquina');
        }
    } else if (user === machine) {
        console.log('Es un empate');
    }
}

resultado(opcion2, opcion2);