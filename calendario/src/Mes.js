import React from 'react';

import Semana from './Semana.js';
import {diasNoMes, diasDaSemana, abrevDiasSemana, nomesMeses} from './constantes.js';
import './Mes.css';

/// Cabeçalho de meses, localzão mesmo
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
		const nomes = this.state.abreviado ? abrevDiasSemana : diasDaSemana;
		const nomeMes = nomesMeses[this.props.numMes]
		const classe = this.props.ehEsse ? 'EsseMes' : 'OutroMes';
		return (
			<thead onClick={this.onClick}>
				<tr>
					<th colSpan="7" className={classe}>{nomeMes}</th>
				</tr>
				<tr>
					{nomes.map ((nome, i) => <th key={i}>{nome}</th>)}
				</tr>
			</thead>
		);
	}
}

class Mes extends React.Component {
	render () {
		const hoje = this.props.hoje;
		const esseAno = hoje.getFullYear ();
		const numMes = this.props.numMes;
		const numDias = diasNoMes[numMes];
		let data = new Date (esseAno, numMes, 1);
		const numSemanas = Math.ceil ((numDias + data.getDay ()) / 7);
		const semanas = Array (numSemanas).fill (null).map ((_, i) => {
			const dia = data.getDate ();
			const diaNaSemana = data.getDay ();
			data.setDate (dia + 7 - diaNaSemana);
			return <Semana hoje={hoje} diaInicial={dia} diaInicialDaSemana={diaNaSemana} diasNoMes={numDias} key={i} />;
		});
		return (
			<div>
				<table>
					<CabecalhoMes numMes={numMes} ehEsse={hoje.getMonth () == numMes} />
					<tbody>
						{semanas}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Mes;
