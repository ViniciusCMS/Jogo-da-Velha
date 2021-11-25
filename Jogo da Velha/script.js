var player, winner = null;
var playerTurn = document.getElementById("turno");
var winnerTurn = document.getElementById("vencedor");
var quadrados = document.getElementsByClassName("quadrado");


turno("X");

function aoClicar(id) {
    if(winner !== null){
        return;
    }
    
    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== "-"){
        return;
    }

    quadrado.innerHTML = player;
    quadrado.style.color = "#000";

    if (player === "X"){
        player = "O"
    }else{
        player = "X"
    };

    turno(player);
    winnerCheck();
};

function turno(valor){
    player = valor;
    playerTurn.innerHTML = player;
};

function winnerCheck(){

    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (sequenceCheck(quadrado1, quadrado2, quadrado3)){
        changeColor(quadrado1, quadrado2, quadrado3);
        changeWinner(quadrado1)
        return;
    }

    if (sequenceCheck(quadrado4, quadrado5, quadrado6)){
        changeColor(quadrado4, quadrado5, quadrado6);
        changeWinner(quadrado4)
        return;
    }

    if (sequenceCheck(quadrado7, quadrado8, quadrado9)){
        changeColor(quadrado7, quadrado8, quadrado9);
        changeWinner(quadrado7)
        return;
    }

    if (sequenceCheck(quadrado1, quadrado4, quadrado7)){
        changeColor(quadrado1, quadrado4, quadrado7);
        changeWinner(quadrado1)
        return;
    }

    if (sequenceCheck(quadrado2, quadrado5, quadrado8)){
        changeColor(quadrado2, quadrado5, quadrado8);
        changeWinner(quadrado2)
        return;
    }

    if (sequenceCheck(quadrado3, quadrado6, quadrado9)){
        changeColor(quadrado3, quadrado6, quadrado9);
        changeWinner(quadrado3)
        return;
    }

    if (sequenceCheck(quadrado1, quadrado5, quadrado9)){
        changeColor(quadrado1, quadrado5, quadrado9);
        changeWinner(quadrado1)
        return;
    }

    if (sequenceCheck(quadrado3, quadrado5, quadrado7)){
        changeColor(quadrado3, quadrado5, quadrado7);
        changeWinner(quadrado3)
        return;
    }

};

function changeWinner (quadrado){
    winner = quadrado.innerHTML
    winnerTurn.innerHTML = winner;

};

function changeColor (quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = "#3f00fc";
    quadrado2.style.background = "#3f00fc";
    quadrado3.style.background = "#3f00fc";
};

function sequenceCheck (quadrado1, quadrado2, quadrado3){
    var check = false;
    
    if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        check = true;
    }
    return check
};

function restart (){
    winner = null;
    winnerTurn.innerHTML = "";

    for (i = 1; i <= 9; i++){
        var quadrados = document.getElementById(i);
        quadrados.style.background = "#f87000";
        quadrados.style.color = "#f87000";
        quadrados.innerHTML = "-";
    }
    turno("X")
};