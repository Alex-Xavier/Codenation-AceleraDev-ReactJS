'use strict'

const fibonacci = () => {
	let sequenciaFibonacci = [0, 1]

	for (let i = 2; i < 15; i++) {
		sequenciaFibonacci[i] = sequenciaFibonacci[i-1] + sequenciaFibonacci[i-2]
	}
	return sequenciaFibonacci
}

const isFibonnaci = (numero) => fibonacci().includes(numero)

module.exports = {
  fibonacci,
  isFibonnaci
}
