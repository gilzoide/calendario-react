// Módulo de constantes úteis por aí =]
const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const abrevDiasSemana = diasDaSemana.map ((nome) => nome.substring (0, 3));
const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
		'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export {diasNoMes, diasDaSemana, abrevDiasSemana, nomesMeses};
