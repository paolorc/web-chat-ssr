import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

// This is the root entrypoint of the client App
const App = ({ route }) => {
	return <div>{renderRoutes(route.routes)}</div>;
};

App.propTypes = {
	route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
	route: null,
};

export default {
	component: App,
};
