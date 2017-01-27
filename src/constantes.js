// Módulo de constantes úteis por aí =]
const dias_no_mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dias_da_semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const abrev_dias_semana = dias_da_semana.map ((nome) => nome.substring (0, 3));
const nomes_meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
		'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export {dias_no_mes, dias_da_semana, abrev_dias_semana, nomes_meses};
