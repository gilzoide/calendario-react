import React from 'react';

import Semana from './Semana.js';
import {dias_no_mes, dias_da_semana, abrev_dias_semana} from './constantes.js';

/// Cabeçalho de meses, 
class CabecalhoMes extends React.Component {
	constructor (props) {
		super (props);
		this.state = { abreviado: true };

		this.onClick = this.onClick.bind (this);
	}

	onClick () {
		this.setState (prevState => ({ abreviado: !prevState.abreviado }));
	}

	render () {
		const nomes = this.state.abreviado ? abrev_dias_semana : dias_da_semana;
		return (
			<thead onClick={this.onClick}>
				<tr>
					{nomes.map ((nome, i) => <th key={i}>{nome}</th>)}
				</tr>
			</thead>
		);
	}
}

class Mes extends React.Component {
	render () {
		const esse_ano = this.props.esse_ano;
		const num_mes = this.props.num_mes;
		const num_dias = dias_no_mes[num_mes];
		let data = new Date (esse_ano, num_mes, 1);
		const num_semanas = Math.ceil ((num_dias + data.getDay ()) / 7);
		const semanas = Array(num_semanas).fill(null).map ((_, i) => {
			const dia = data.getDate ();
			const dia_na_semana = data.getDay ();
			data.setDate (dia + 7 - dia_na_semana);
			return <Semana dia_inicial={dia} dia_inicial_da_semana={dia_na_semana} dias_no_mes={num_dias} key={i} />;
		});
		return (
			<table>
				<CabecalhoMes />
				<tbody>
					{semanas}
				</tbody>
			</table>
		);
	}
}

export default Mes;
