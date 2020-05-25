const escola = "Cod3r"

//mostrar qual caracter está presente na posição desejada ()
console.log(escola.charAt(4))
console.log(escola.charAt(5))

//Pega o valor do digito referente a tabela ascii
console.log(escola.charCodeAt(3))

//Retorna a posição relativa ao indice 'r'
console.log(escola.indexOf('r'))

//A partir do indice até o final
console.log(escola.substring(1))

//A partir do indice 0 até 3 sem incluir o indice 3
console.log(escola.substring(0,3))

//Juntar strings -> "escola Cod3r!"
console.log("escola ".concat(escola).concat("!"))

//Troca o que está contido em uma posição por outra string
console.log(escola.replace(3,'e'))

//Cria arrays separando através de um caracter desejado
console.log("Ana,Maria,Pedro".split(','))