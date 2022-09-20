let partidas=+prompt("por favor ingrese la cantidad de partidas que desea jugar") 
if(isNaN(partidas) || partidas==0){
alert("por favor ingrese un dato valido")
} else{

let juego
let juegoPc
let contPc=0
let contUser=0
let contEmpate=0
for (let i = 0; i <partidas; i++) {
    juegoPc=Math.floor(Math.random()*3+1)

    juego=+prompt("por favor escoja una de las opciones:\n 1:Piedra. \n 2:Papel. \n 3:Tijera")

if (juego>=1 && juego<=3) {
    
    if(juego==1 && juegoPc==2){
        alert("PC Win! \n jugador eligio:Piedra \n PC eligio:Papel")
        contPc=contPc+1
    }

    if(juego==1 && juegoPc==3){
        alert("User Win! \n jugador eligio:Piedra \n PC eligio:Tijera")
        contUser=contUser+1
    }

    if(juego==1 && juegoPc==1){
        alert("Draw! \n jugador eligio:Piedra \n PC eligio:Piedra")
        contEmpate=contEmpate+1
    }

    if(juego==2 && juegoPc==2){
        alert("Draw! \n jugador eligio:Papel \n PC eligio:Papel")
        contEmpate=contEmpate+1
    }

    if(juego==2 && juegoPc==3){
        alert("PC Win! \n jugador eligio:Papel \n PC eligio:Tijera")
        contPc=contPc+1
    }

    if(juego==2 && juegoPc==1){
        alert("User Win! \n jugador eligio:Papel \n PC eligio:Piedra")
        contUser=contUser+1
    }

    if(juego==3 && juegoPc==2){
        alert("User Win! \n jugador eligio:Tijera \n PC eligio:Papel")
        contUser=contUser+1
    }

    if(juego==3 && juegoPc==3){
        alert("Draw! \n jugador eligio:Tijera \n PC eligio:Tijera")
        contEmpate=contEmpate+1
    }

    if(juego==3 && juegoPc==1){
        alert("PC Win! \n jugador eligio:Tijera \n PC eligio:Piedra")
        contPc=contPc+1
    }

} else{
    alert("por favor ingrese un dato valido")
    i--;
}
}


alert("Fin del Juego. \n\n Resultados:\n User: "+contUser+" Victoria(s) \n PC: "+contPc+" Victoria(s) \n Empates: "+contEmpate+" Empate(s)")
}