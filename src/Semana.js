import React from 'react';

import Dia from './Dia.js';

class Semana extends React.Component {
	render () {
		const ini = this.props.dia_inicial;
		const ini_na_semana = this.props.dia_inicial_da_semana;
		const dias_no_mes = this.props.dias_no_mes;
		const dias = Array (7).fill (null).map ((_, i) => {
			const dia = ini + i - ini_na_semana;
			const num_dia = i >= ini_na_semana && dia <= dias_no_mes ? dia : '';
			return <Dia num_dia={num_dia} key={i} />;
		});
		return (
			<tr>
				{dias}
			</tr>
		);
	}
}

export default Semana;
