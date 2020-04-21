let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0'
}

const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj

console.log(vRodas)
console.log(obj.rodas)
console.log(obj.motor)
console.log(vPortas)

console.log(obj)

console.table(obj)