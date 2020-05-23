var input = window.document.getElementById('valor');
var result = window.document.getElementById('result');
let num = 0;
var flag = 0;
var elevado = 0;
var resultado = 0;
var exponencial = 0;
var number_centena, number_dezena, number_unidade;

function calcular() {
    num = 0;
    flag = 0;
    resultado = 0;
    elevado = 0;
    result.innerHTML = "";

    for (var x = input.value.length - 1; x >= 0; x--) {
        exponencial = input.value.length - x - 1
        num = Number(input.value[x]);
        elevado = Math.pow(2, exponencial);
        if (num > 1 || num < 0) {
            flag++;
        }
        resultado += num * elevado;
    }
    if (flag > 0) {
        window.alert("O NÚMERO DEVE SER DECIMAL!!");
    } else {
        result.innerHTML = `Result: ${resultado}`;
        while(resultado > 100){
            resultado-=100;
            number_centena++;
        }
        while(resultado > 10){
            resultado-=10;
            number_dezena++;
        }
        number_unidade = resultado;
        Write_Emoji();
    }
}

function Check_Change(event) {
    if ((event.keyCode > 49 || event.keyCode < 48) && event.keyCode != 8) {
        //e.preventDefault();
        //window.alert(`${input.val()}`)
        //$("#valor").val(d.slice(0,-1));
        return false;
    } else {
        /* if (input.value.length < 8) {
            return true;
        } else {
            if (event.keyCode != 8) {
                return false;
            } else {
                return true;
            }
            
        } */
        return true;

    }
}

function Write_Emoji(){
    var str;
    switch(number_centena){

    }
}
