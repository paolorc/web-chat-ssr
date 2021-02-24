import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ staticContext = {} }) => {
	return (
		<div>
			<h1>Welcome Page</h1>
		</div>
	);
};

export default {
	component: Welcome,
};
