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
	console.log(auxiliar)

	auxiliar.map( (valor) => {
		console.log(numero, valor)
		if (numero == valor) {
			console.log('ENTROU NO IF')
			return true
		}
	});

	return false
}

module.exports = {
  fibonacci,
  isFibonnaci
}
