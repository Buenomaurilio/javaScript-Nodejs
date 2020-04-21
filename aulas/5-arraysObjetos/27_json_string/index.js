let pessoa = {
  "nome": "Maurilio",
  "idade": 34,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)
// console.log(pessoaTexto.nome)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[0])

console.table(pessoa)