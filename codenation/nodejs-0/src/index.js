'use strict'

let sequenciaFibonacci = [0, 1]

const fibonacci = () => {
	for (let i = 2; i < 15; i++) {
		sequenciaFibonacci[i] = sequenciaFibonacci[i-1] + sequenciaFibonacci[i-2]
	}
	return sequenciaFibonacci
}

const isFibonnaci = (numero) => {
	const auxiliar = fibonacci()

	for (let i = 0; i < auxiliar.length; i++) {
		if (numero == auxiliar[i]) {
			return true
		}
	}

	return false
}

module.exports = {
  fibonacci,
  isFibonnaci
}
