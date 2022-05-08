var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x = 1;
var y = 100;
var auxX = 5;
var auxY = 5;


function animatex() {

    requestAnimationFrame(animatex);
    c.clearRect(0, 0, innerWidth, innerHeight)

    c.fillStyle = 'rgba(255,0,0,1)'; //Escolhe a cor
    c.fillRect(x, 200, 200, 200); //Posiciona em X, Y e depois o tamanho

    if ((x + 200) > innerWidth) {
        auxX = -auxX;
    }
    else if (x < 0) {
        auxX = -auxX
    }
    x = x + auxX;


}
animatex();



function animatey() {

    requestAnimationFrame(animatey);
    c.clearRect(0, 0, innerWidth, innerHeight)

    c.fillStyle = 'rgba(255,0,0,1)'; //Escolhe a cor
    c.fillRect(200, y, 200, 200); //Posiciona em X, Y e depois o tamanho

    if ((y + 200) > innerHeight) {
        auxY = -auxY;
    }
    else if (y < 0) {
        auxY = -auxY
    }
    y = y + auxY
}
animatey();


function Pare() {
    requestAnimationFrame(Pare)
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.fillStyle = "rgba(255,0,0,1)"
    c.fillRect(200, 200, 200, 200)
}
Pare();


function gerar_cor_hexadecimal() {
    return '#' + parseInt((Math.random() * 0xFFF))
        .toString(16)
        .padStart(3, '0');
}



/*
//Desafio 1
for (var i = 0; i < 10; i++) {

    auxX = x + auxX; //Reposiciona em X

    //Quadrado
    c.fillStyle = 'rgba(0,255,0,1)'; //Escolhe a cor
    c.fillRect(auxX, y, 30, 30); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX, y); //InÃ­cio da linha
    c.lineTo(auxX, auxX); //Final da linha
    c.strokeStyle = "purple"; //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho


    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, x, 20, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
}
*/



/*
//Desafio 2
for (var i = 0; i < 10; i++) {

    auxX = Math.random() * 800 + Math.random() * 800; //Reposiciona em X
    auxY = Math.random() * 150 + Math.random() * 300; //Reposiciona em Y

    //Quadrado
    c.fillStyle = "blue"; //Escolhe a cor
    c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX - Math.random() * 50, x + auxX); //InÃ­cio da linha
    c.lineTo(auxX - Math.random() * 50, y + auxY); //Final da linha
    c.strokeStyle = "purple"; //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, auxY * Math.random(), 20, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
}
*/



/*
//Desafio 3
for (var i = 0; i < 10; i++) {

    auxX = Math.random() * 800 + Math.random() * 800; //Reposiciona em X
    auxY = Math.random() * 150 + Math.random() * 300; //Reposiciona em Y

    //Quadrado
    c.fillStyle = gerar_cor_hexadecimal(); //Escolhe a cor
    c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX - Math.random() * 50, x + auxX); //InÃ­cio da linha
    c.lineTo(auxX - Math.random() * 50, y + auxY); //Final da linha
    c.strokeStyle = gerar_cor_hexadecimal(); //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, auxY * Math.random(), 20, 0, Math.PI * 2, false);
    c.strokeStyle = gerar_cor_hexadecimal();
    c.stroke();
}
*/


/*
//Desafio 4
//CÃ­rculo
c.beginPath();
c.arc(x, y, Math.random() * 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();
*/


/*
//Estrela
c.fillStyle = gerar_cor_hexadecimal();
c.beginPath();
c.moveTo(108, 0.0);
c.lineTo(141, 70);
c.lineTo(218, 78.3);
c.lineTo(162, 131);
c.lineTo(175, 205);
c.lineTo(108, 170);
c.lineTo(41.2, 205);
c.lineTo(55, 131);
c.lineTo(1, 78);
c.lineTo(75, 68);
c.lineTo(108, 0);
c.closePath();
c.fill();
*/

/*
//Coração
c.fillStyle = gerar_cor_hexadecimal()
c.beginPath();
c.moveTo(75, 40);
c.bezierCurveTo(75, 37, 70, 25, 50, 25);
c.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
c.bezierCurveTo(20, 80, 40, 102, 75, 120);
c.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
c.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
c.bezierCurveTo(85, 25, 75, 37, 75, 40);
c.fill();
*/


/*
//Batman
var batman = document.getElementById('batman');
c.beginPath();
c.moveTo(800, 600);
c.quadraticCurveTo(800, 260, 1190, 450);
c.quadraticCurveTo(1200, 290, 1450, 450);
c.quadraticCurveTo(1200, 50, 1100, 50);
c.lineTo(1075, 150);
c.lineTo(875, 200);
c.lineTo(860, 100);
c.lineTo(830, 160);
c.lineTo(800, 165);
c.lineTo(770, 160);
c.lineTo(740, 100);
c.lineTo(725, 200);
c.lineTo(525, 150);
c.lineTo(500, 50);
c.quadraticCurveTo(400, 50, 150, 450);
c.quadraticCurveTo(400, 290, 390, 450);
c.quadraticCurveTo(800, 260, 800, 600);
c.lineWidth = 2;
c.fillStyle = gerar_cor_hexadecimal();
c.fill();
*/