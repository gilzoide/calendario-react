import React from 'react';

// import logo from './logo.svg';
import Mes from './Mes.js';

class App extends React.Component {
	render () {
		const hoje = new Date ();
		const meses = Array (12).fill (null).map ((_, i) => {
			return <Mes hoje={hoje} numMes={i} key={i} />;
		});
		return (
			<div>
				<h1>{hoje.getFullYear ()}</h1>
				{meses}
			</div>
		);
	}
}

export default App;
