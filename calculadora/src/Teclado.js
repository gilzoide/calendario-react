import React from 'react';
import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

const teclas = [
	['7', '8', '9', '/'],
	['4', '5', '6', '*'],
	['1', '2', '3', '-'],
	['C', '0', '=', '+'],
];

class Teclado extends React.Component {
	render () {
		const todasTeclas = teclas.map ((teclasLinha, i) => {
			const botoesLinha = teclasLinha.map ((tecla, i) => (
				<Button onClick={() => this.props.atualizaConteudo (tecla)} key={i}>{tecla}</Button>
			));
			return (
				<ButtonGroup justified key={i}>
					{botoesLinha}
				</ButtonGroup>
			);
		});
		return (
			<ButtonToolbar>
				{todasTeclas}
			</ButtonToolbar>
		);
	}
}

export default Teclado;
