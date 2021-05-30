var btn_jogador1 = document.getElementById("btn_jogador_1");
var btn_jogador2 = document.getElementById("btn_jogador_2");
var btn_parar1 = document.getElementById("btn_parar_1");
var btn_parar2 = document.getElementById("btn_parar_2");
var player1 = 0;
var player2 = 0;
var cartas1 = document.getElementById("cartas1");
var cartas2 = document.getElementById("cartas2");
var resultado1 = document.getElementById('resultado_jogador1');
var resultado2 = document.getElementById('resultado_jogador2');
var resultado_total = document.getElementById('resultado_total');
var jog1 = document.getElementById('nome1');
var jog2 = document.getElementById('nome2');

$(btn_jogador1).attr('disabled', 'disabled');
$(btn_parar1).attr('disabled', 'disabled');
$(btn_jogador2).attr('disabled', 'disabled');
$(btn_parar2).attr('disabled', 'disabled');

function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {
    var aleatorio = valorAleatorio();
    $(cartas1).attr("src", '/images/' + aleatorio + '.png');
    resultado1.innerHTML = player1 += aleatorio;

    if (player1 > 21) {
        resultado_total.innerHTML = "Jogador 1 Estorou";
        $(btn_jogador1).attr('disabled', 'disabled');
        $(btn_parar1).attr('disabled', 'disabled');
    } 
}

function jogador2() {
    var aleatorio = valorAleatorio();
    $(cartas2).attr("src", '/images/' + aleatorio + '.png');
    resultado2.innerHTML = player2 += aleatorio;

    if (player1 < player2 && player2 <= 21) {
        resultado_total.innerHTML = "Jogador 2 Ganhou";
    } else if (player1 > 21 && player2 <= 21) {
        resultado_total.innerHTML = "Jogador 2 Ganhou";
    } else if (player2 > 21 && player1 > 21) {
        resultado_total.innerHTML = "A casa ganhou!";
    } else if (player2 > 21) {
        resultado_total.innerHTML = "Jogador 1 Ganhou";
        $(btn_jogador2).attr('disabled', 'disabled');
        $(btn_parar2).attr('disabled', 'disabled');
    }
}

function parar1() {
    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}

function parar2() {
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    if (player1 == player2) {
        resultado_total.innerHTML = "Empate!";
    } else if (player1 <= 21 && player1 > player2) {
        resultado_total.innerHTML = "Jogador 1 Ganhou!";
    }
}

function reiniciar() {
    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');

    player1 = 0;
    player2 = 0;
    resultado1.innerHTML = 0;
    resultado2.innerHTML = 0;

    resultado_total.innerHTML = "";

    $(cartas1).attr("src", '/images/0.png');
    $(cartas2).attr("src", '/images/0.png');
}

function iniciar() {
    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');
}

function cadastrar() {
    if (nome1 == "Jogador 1") {

    }
    else {
        jog2 = Nick.Text;
        label_jogador2.Text = jog2;
        btn_cadastrar.Visible = false;
        Nick.Visible = false;
    }
}