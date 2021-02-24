import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ChatApp = ({ isHided, staticContext = {} }) => {
	return <div>{!isHided && <h1>This is the Chat App!</h1>}</div>;
};

const mapStateToProps = (state) => ({
	isHided: state.toggle.isHided,
});

export default {
	component: connect(mapStateToProps, {})(ChatApp),
};
