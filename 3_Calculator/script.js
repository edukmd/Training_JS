var result = window.document.getElementById("resultado")
var number = window.document.getElementById("number")
var get_result = 0;
var resultado_vetor = [];
var flag_sum = 0;
var flag_minus = 0;
var flag_division = 0;
var numero_armazenado = 0;
var numero_armazenado_dois = 0;
var number_result = 0;
var myVar;
var font_size = 0;
var flag_opacity = 0;


function zero() {
    if (resultado_vetor.length < 8) {
        get_result = 0;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function um() {
    if (resultado_vetor.length < 8) {
        get_result = 1;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function dois() {
    if (resultado_vetor.length < 8) {
        get_result = 2;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function tres() {
    if (resultado_vetor.length < 8) {
        get_result = 3;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function quatro() {
    if (resultado_vetor.length < 8) {
        get_result = 4;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function cinco() {
    if (resultado_vetor.length < 8) {
        get_result = 5;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function seis() {
    if (resultado_vetor.length < 8) {
        get_result = 6;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (flag_opacity == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function sete() {
    if (resultado_vetor.length < 8) {
        get_result = 7;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function oito() {
    if (resultado_vetor.length < 8) {
        get_result = 8;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function nove() {
    if (resultado_vetor.length < 8) {
        get_result = 9;
        number.innerHTML = `${get_result}`;
        resultado_vetor.push(get_result);
        result.innerHTML += `${get_result}`;
        if (font_size == 0) {
            myVar = setInterval(myTimer, 40);
            font_size = 0;
        }

    }

}

function myTimer() {

    if (flag_opacity == 0) {
        font_size += 0.1;
        number.style.opacity = `${font_size}`;
        if (font_size >= 1)
            flag_opacity = 1;
    } else {
        font_size -= 0.1;
        number.style.opacity = `${font_size}`;
        if (font_size <= 0) {
            font_size = 0;
            flag_opacity = 0;
            clearInterval(myVar);
        }
    }

}

function somar() {
    result.innerHTML = "";
    if (flag_sum == 0) {
        flag_sum = 1;
        flag_minus = 0;
        flag_division = 0;
        if (resultado_vetor.length != 0) {
            numero_armazenado = 0;
            for (var i = 0; i < resultado_vetor.length; i++) {
                numero_armazenado += (resultado_vetor[i]) * (Math.pow(10, (resultado_vetor.length - i - 1)));
            }
        } else {
            numero_armazenado = number_result;
        }
        resultado_vetor = [];
    }
}

function menos() {
    result.innerHTML = "";
    if (flag_minus == 0) {
        flag_sum = 0;
        flag_minus = 1;
        flag_division = 0;

        if (resultado_vetor.length != 0) {
            numero_armazenado = 0;
            for (var i = 0; i < resultado_vetor.length; i++) {
                numero_armazenado += (resultado_vetor[i]) * (Math.pow(10, (resultado_vetor.length - i - 1)));
            }
        } else {
            numero_armazenado = number_result;
        }

        resultado_vetor = [];
    }
}

function dividido() {
    result.innerHTML = "";
    if (flag_division == 0) {
        flag_sum = 0;
        flag_minus = 0;
        flag_division = 1;

        if (resultado_vetor.length != 0) {
            numero_armazenado = 0;
            for (var i = 0; i < resultado_vetor.length; i++) {
                numero_armazenado += (resultado_vetor[i]) * (Math.pow(10, (resultado_vetor.length - i - 1)));
            }
        } else {
            numero_armazenado = number_result;
        }

        resultado_vetor = [];
    }
}

function igual() {
    number_result = 0;
    numero_armazenado_dois = 0;
    if (flag_sum == 1) {

        flag_sum = 0;
        flag_minus = 0;
        flag_division = 0;

        for (var i = 0; i < resultado_vetor.length; i++) {
            numero_armazenado_dois += (resultado_vetor[i]) * (Math.pow(10, (resultado_vetor.length - i - 1)));
        }
        number_result = numero_armazenado + numero_armazenado_dois;
        console.log(numero_armazenado_dois);
        result.innerHTML = `${number_result}`;
    } else if (flag_minus == 1) {

        flag_sum = 0;
        flag_minus = 0;
        flag_division = 0;

        for (var i = 0; i < resultado_vetor.length; i++) {
            numero_armazenado_dois += (resultado_vetor[i]) * (Math.pow(10, (resultado_vetor.length - i - 1)));
        }
        number_result = numero_armazenado - numero_armazenado_dois;
        result.innerHTML = `${number_result}`;
    } else if (flag_division == 1) {

        flag_sum = 0;
        flag_minus = 0;
        flag_division = 0;

        for (var i = 0; i < resultado_vetor.length; i++) {
            numero_armazenado_dois += (resultado_vetor[i]) * (Math.pow(10, (resultado_vetor.length - i - 1)));
        }
        number_result = numero_armazenado / numero_armazenado_dois;
        result.innerHTML = `${number_result}`;
    }
    else {
        result.innerHTML = "";
    }


    resultado_vetor = [];
}

function apagar() {
    resultado_vetor = [];
    result.innerHTML = "";
    numero_armazenado = 0;
    numero_armazenado_dois = 0;
    flag_sum = 0;
}