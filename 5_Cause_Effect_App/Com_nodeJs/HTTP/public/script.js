var selecionado;

//Mostrar
var nome_show = window.document.getElementById('nome_show');
var idade_show = window.document.getElementById('idade_show');
var cidade_show = window.document.getElementById('cidade_show');
var list_name = window.document.getElementById('list-name');

//Registrar
var nome_entrada = window.document.getElementById('nome-entrada');
var idade_entrada = window.document.getElementById('idade-entrada');
var cidade_entrada = window.document.getElementById('cidade-entrada');

async function load() {
    const res = await fetch("http://localhost:3000/")
        .then((data) => data.json())

    list_name.innerHTML = "";
    for (var x = 0; x < res.people.length; x++) {
        list_name.innerHTML += `<li><button>${res.people[x].name}</button></li>`;
    }
    cidadao = res;
}

load()

function delete_people(name) {
}

function display_info(name) {
    for (var x = 0; x < cidadao.people.length; x++) {
        if (name == cidadao.people[x].name) {
            nome_show.innerHTML = `Nome: ${cidadao.people[x].name}`;
            idade_show.innerHTML = `Idade: ${cidadao.people[x].age}`;
            cidade_show.innerHTML = `Cidade: ${cidadao.people[x].city}`;
        }

    }
}

function target(event) {
    display_info(event.target.innerHTML);
    selecionado = event.target.innerHTML;

}

function registro() {
    var criar_nome = nome_entrada.value;
    var criar_idade = idade_entrada.value;
    var criar_cidade = cidade_entrada.value;
    if (criar_nome.length != 0 && criar_idade.length != 0 && criar_cidade.length != 0) {
        fetch(`http://localhost:3000?name=${criar_nome}&age=${criar_idade}&city=${criar_cidade}`)
        nome_entrada.value = "";
        idade_entrada.value = "";
        cidade_entrada.value = "";
        load();

    } else {
        window.alert("Preencha os dados corretamente")
    }

}

async function deletar() {
    await fetch(`http://localhost:3000?name=${selecionado}&age=28&city=Taquaritinga&del=1`)
    nome_show.innerHTML = ``;
    idade_show.innerHTML = ``;
    cidade_show.innerHTML = ``;
    load();
}
