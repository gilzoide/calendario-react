import React from 'react';

import Dia from './Dia.js';

class Semana extends React.Component {
	render () {
		const ini = this.props.diaInicial;
		const iniNaSemana = this.props.diaInicialDaSemana;
		const diasNoMes = this.props.diasNoMes;
		const dias = Array (7).fill (null).map ((_, i) => {
			const dia = ini + i - iniNaSemana;
			const numDia = i >= iniNaSemana && dia <= diasNoMes ? dia : '';
			return <Dia numDia={numDia} key={i} />;
		});
		return (
			<tr>
				{dias}
			</tr>
		);
	}
}

export default Semana;
