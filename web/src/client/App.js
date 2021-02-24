import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const App = (props) => {
	const [hide, setHide] = useState(false);
	// const [items, setItems] = useState([]);
	// useEffect(() => {
	//     (async () => {
	//         const response = await fetch('http://localhost:4000/items');
	//         const newItems = await response.json();

	//         setItems(newItems);
	//     })();
	// }, []);

	const handleClick = () => {
		setHide(!hide);
	};

	return (
		<div>
			<h1>Hola mundo</h1>
			<button onClick={handleClick}>Toggle</button>
			<ul>{!hide && props.items.map((item) => <li key={item.id}>{item.label}</li>)}</ul>
		</div>
	);
};

App.defaultProps = {
	items: [{ id: 1, label: 'test' }],
};

const mapStateToProps = (state) => ({
	isHided: state.toggle.isHided,
});

export default App;