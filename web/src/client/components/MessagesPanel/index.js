import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Divider, List, makeStyles } from '@material-ui/core';

import Message from '../Message';
import MessageInput from '../MessageInput';

const useStyles = makeStyles((theme) => ({
	messagePanel: {
		height: '80vh',
		overflowY: 'auto',
	},
}));

const MesssagesPanel = () => {
	const classes = useStyles();

	return (
		<>
			<List className={classes.messagePanel}>
				<Message
					text="Te amo mucho mi amor... gracias por estos dias... de entenderme y aguantarme y ayudarme uu"
					align="left"
					sender="Paolo Reyes Gordito"
				/>

				<Message
					text="Gracias por todos los desayunos ricooos =)"
					align="right"
					sender="Gabriela Villafuerte, Mi vida"
				/>
			</List>

			<Divider />

			<MessageInput />
		</>
	);
};

const mapStateToProps = (state) => ({
	users: state.users,
});

export default connect(mapStateToProps, {})(MesssagesPanel);
