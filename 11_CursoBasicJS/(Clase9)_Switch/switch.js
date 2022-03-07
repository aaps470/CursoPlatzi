/* Piedra: 0, papel: 1 o tijera: 2
 parámetros: p = persona, pc = computadora */

var p;
var pc;

function jugar(p, pc) {
    switch (p) {
        case 0:
            switch (pc) {
                case 0:
                    console.log("Empate");
                    break;
                case 1:
                    console.log("Pierdes");
                    break;
                default:
                    console.log("Ganas");
                    break;
            }
            break;
        case 1:
            switch (pc) {
                case 0:
                    console.log("Ganas");
                    break;
                case 1:
                    console.log("Empate");
                    break;
                default:
                    console.log("Pierdes");
                    break;
            }
            break;
        default:
            switch (pc) {
                case 0:
                    console.log("Pierdes");
                    break;
                case 1:
                    console.log("Ganas");
                    break;
                default:
                    console.log("Empate");
                    break;
            }
            break;
    }
}
