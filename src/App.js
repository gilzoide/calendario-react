import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Mes from './Mes.js';

class App extends React.Component {
	render () {
		const hoje = new Date ();
		const meses = Array (12).fill (null).map ((_, i) => {
			return <Mes esse_ano={hoje.getFullYear ()} num_mes={i} key={i} />;
		});
		return (
			<div>
				{meses}
			</div>
		);
	}
}

export default App;
