let pessoa = {
  nome: 'Maurilio',
  idade: 29,
  profissao: 'Programador',
}
console.table(pessoa)
console.log(pessoa.nome)

delete pessoa.nome

console.log(pessoa.nome)

console.log(pessoa)

pessoa.casado = false

console.log(pessoa.casado)

console.table(pessoa)

pessoa.nome = 'Maurilio Bueno'
console.table(pessoa)

