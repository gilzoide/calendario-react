import React from 'react';
import {Panel} from 'react-bootstrap';

import Teclado from './Teclado.js';
import processaTecla from './calcula.js';

class App extends React.Component {
	constructor (props) {
		super (props);
		this.state = {conteudo: ""};
		this.atualizaConteudo = this.atualizaConteudo.bind (this);
	}

	atualizaConteudo (tecla) {
		this.setState (prev => ({conteudo: processaTecla (prev.conteudo, tecla)}));
	}

	render() {
		return (
			<Panel header={this.state.conteudo || "0"} >
				<Teclado atualizaConteudo={this.atualizaConteudo} />
			</Panel>
		);
 	}
}

export default App;
