var box = window.document.getElementById("caixa")
var left_top = window.document.getElementById("LT")
var right_top = window.document.getElementById("RT")
var left_bottom = window.document.getElementById("LB")
var right_bottom = window.document.getElementById("RB")
var mouseX = 0;
var mouseY = 0;
var botao = 0;
var enviar = 0;
var porcentagem = 0;


function LT_MOVE() {
    botao = 1;
    left_top.style.backgroundColor = "Purple";
}

function RT_MOVE() {
    botao = 2;
    right_top.style.backgroundColor = "Purple";
}

function LB_MOVE() {
    botao = 3;
    left_bottom.style.backgroundColor = "Purple";
}

function RB_MOVE() {
    botao = 4;
    right_bottom.style.backgroundColor = "Purple";
}

function position(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (botao != 0) {
        switch (botao) {
            case 1:
                if (mouseX >= 400 && mouseX <= 700) {
                    porcentagem = 0;
                    porcentagem = (((mouseX-80)/(310))*100) - 100;
                    enviar = Math.round(porcentagem);
                    box.style.borderTopLeftRadius = enviar + "%";
                    left_top.style.left = (mouseX - 15) + "px";
                }

                break;
            case 2:
                if (mouseY >= 210 && mouseY <= 510) {
                    porcentagem = 0;
                    porcentagem = (((mouseY+100)/(310))*100) - 100;
                    enviar = Math.round(porcentagem);
                    box.style.borderTopRightRadius = enviar + "%";
                    right_top.style.top = (mouseY - 25) + "px";
                }

                break;
            case 3:
                if (mouseY >= 210 && mouseY <= 510) {
                    porcentagem = 0;
                    porcentagem = (((820-mouseY)/(310))*100) - 100;
                    enviar = Math.round(porcentagem);
                    box.style.webkitBorderBottomLeftRadius = enviar + "%";
                    left_bottom.style.top = (mouseY - 25) + "px";
                }

                break;
            case 4:
                if (mouseX >= 400 && mouseX <= 700) {
                    porcentagem = 0;
                    porcentagem = (((1000-mouseX)/310)*100) - 100;
                    enviar = Math.round(porcentagem);
                    box.style.borderBottomRightRadius = enviar + "%";
                    right_bottom.style.left = (mouseX - 15) + "px";
                }
                break;
        }
    }

}

function STOP_MOTION() {

    switch (botao) {
        case 1:
            left_top.style.backgroundColor = "Blue";

            break;
        case 2:
            right_top.style.backgroundColor = "Yellow";

            break;
        case 3:
            left_bottom.style.backgroundColor = "Green";

            break;
        case 4:
            right_bottom.style.backgroundColor = "Black";
            break;
    }
    botao = 0;

}