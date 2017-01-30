/// Calcula: o módulo que processa os input e faz os cálculos de verdade, a
// regra de negócio =]

// Regex de operadores, capturando-os
const operadorExp = /([+\-*\/])/;

function fazConta (conteudo) {
	// número negativo, põe um '0' antes pra facilitar o rolê
	if (conteudo.startsWith ('-')) conteudo = '0' + conteudo;
	const valores = conteudo.split (operadorExp);
	var resultado = parseFloat (valores[0]);

	for (let i = 1; i < valores.length; i += 2) {
		var rhs = parseFloat (valores[i + 1]);
		switch (valores[i]) {
			case '+': resultado += rhs; break;
			case '-': resultado -= rhs; break;
			case '*': resultado *= rhs; break;
			case '/': resultado /= rhs; break;
			default:
				alert ("Operação inválida. Espero que isso nunca aconteça =P");
				return '';
		}
	}
	
	if (isNaN (resultado)) return '';
	return resultado.toString ();
}

const operacoes = ['+', '-', '*', '/'];

export default function processaTecla (conteudo, tecla) {
	switch (tecla) {
		case '=':
			conteudo = fazConta (conteudo);
			break;

		case 'C':
			conteudo = '';
			break;

		case '+':
		case '-':
		case '*':
		case '/':
			if (!conteudo) { 
				conteudo = '0' + tecla;
			}
			else if (operacoes.includes (conteudo[conteudo.length - 1])) {
				alert ("Não rola duas operações em seguida");
			}
			else {
				// repeti, pq js reclama se não puser o break ¬¬
				conteudo += tecla;
			}
			break;

		default:
			conteudo += tecla;
			break;
	}
	return conteudo;
};
