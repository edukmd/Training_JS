var People = [];
//Mostrar
var nome_show = window.document.getElementById('nome_show');
var idade_show = window.document.getElementById('idade_show');
var cidade_show = window.document.getElementById('cidade_show');
var list_name = window.document.getElementById('list-name');

//Registrar
var nome_entrada = window.document.getElementById('nome-entrada');
var idade_entrada = window.document.getElementById('idade-entrada');
var cidade_entrada = window.document.getElementById('cidade-entrada');


function create_people(nome = 0, idade = 0, cidade = 0) {
    var objeto = {
        name: "",
        age: 0,
        city: ""
    };

    objeto.name = nome;
    objeto.age = idade;
    objeto.city = cidade;
    People.push(objeto);
}

function delete_people(name) {
    for (var i = 0; i < People.length; i++) {
        if (name == People[i].name) {
            People.splice(i, 1);
        }
    }
}

function display_info(name) {
    for (var i = 0; i < People.length; i++) {
        if (name == People[i].name) {
            nome_show.innerHTML = `Nome: <b>${People[i].name}</b>`;
            idade_show.innerHTML = `Idade: <b>${People[i].age}</b>`;
            cidade_show.innerHTML = `Cidade: <b>${People[i].city}</b>`;
        }
    }
}

function target(event) {
    display_info(event.target.innerHTML);
}

function registrar() {
    if (nome_entrada.value.length != 0 && idade_entrada.value.length != 0 && cidade_entrada.value.length != 0) {
        create_people(nome_entrada.value, idade_entrada.value, cidade_entrada.value);
        var index = People.length - 1;
        list_name.innerHTML += `<li><button>${People[index].name}</button></li>`;
        console.log(People, index);
    }else{
        window.alert("complete os dados")
    }

}
