var player1 = window.document.getElementById('player1');
var body = window.document.getElementById('body');
var projetil = window.document.getElementById('projetil');
var tiro = new Audio('bullet.wav');
const tamanho_player = 64;
const tamanho_projetil = 153;
var position = 9;
var animation_projetil = 0;
var flag_direction = 0;
var InitialX = 0;
var InitialY = 50;
var activate_projetil = 0;
var projectx, projecty;
var counter = 0;
var first_projetil = 0;
const distance = 10;

player1.style.top = "50px";
player1.style.left = "0px";


myVar = setInterval(timer, 50);
var flag_moviment = 0;


function timer() {
    if (activate_projetil == 1) {
        projetil.style.backgroundPositionX = `${tamanho_projetil * animation_projetil}px`;
        if (animation_projetil != 6)
            animation_projetil++;
        projectx += 30;
        projetil.style.left = `${projectx}px`;
        if (projectx >= 800) {
            activate_projetil = 0;
            animation_projetil = 0;
            projetil.style.filter = "opacity(0%)";
        }
    }
    if (flag_moviment != 0) {
        if (flag_direction != 0) {
            player1.style.backgroundPositionX = `${tamanho_player * position}px`;

            position--;
            if (position == 0) {
                position = 9;
            }
        }




        switch (flag_direction) {
            case 1:
                if (InitialY >= 50) {
                    InitialY -= distance;
                    player1.style.top = `${InitialY}px`;
                }
                break;

            case 2:
                if (InitialY <= 500) {
                    InitialY += distance;
                    player1.style.top = `${InitialY}px`;
                }
                break;
            case 3:
                if (InitialX <= 900) {
                    InitialX += distance;
                    player1.style.left = `${InitialX}px`;
                }
                break;
            case 4:
                if (InitialX >= 0) {
                    InitialX -= distance;
                    player1.style.left = `${InitialX}px`;
                }
                break;
            default:
                break;
        }
    }

}
function botao(event) {
    switch (event.keyCode) {
        case 87:
            player1.style.backgroundPositionY = "0px";
            flag_moviment = 1;
            flag_direction = 1;
            break;
        case 83:
            player1.style.backgroundPositionY = "128px";
            flag_moviment = 1;
            flag_direction = 2;
            break;
        case 68:
            player1.style.backgroundPositionY = "64px";
            flag_moviment = 1;
            flag_direction = 3;
            break;
        case 65:
            player1.style.backgroundPositionY = "192px";
            flag_moviment = 1;
            flag_direction = 4;
            break;
        case 88:

            if (first_projetil == 0) {
                first_projetil = 1;
                activate_projetil = 1;
                flag_direction = 0;
                projectx = InitialX;
                projecty = InitialY;
                projetil.style.left = `${projectx}px`;
                projetil.style.top = `${projecty - 32}px`;
                projetil.style.filter = "opacity(100%)";
                tiro.play();
            } else {

                if (projectx >= 700) {
                    activate_projetil = 1;
                    flag_direction = 0;
                    animation_projetil = 0;
                    projectx = InitialX;
                    projecty = InitialY;
                    projetil.style.left = `${projectx}px`;
                    projetil.style.top = `${projecty - 32}px`;
                    projetil.style.filter = "opacity(100%)";
                    tiro.play();
                }

            }

            break;
        default:
            flag_moviment = 0;
            break;

    }
}

function soltar() {
    flag_moviment = 0;
    flag_direction = 0;
}