import React, { useState } from 'react';
import { Fab, Grid, TextField } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

import { applyTextFilter } from '../../../shared/utils';

const MesssageInput = ({ maxLength = 1000, onSend = () => {} }) => {
	const [message, setMessage] = useState('');

	const handleKeyPress = ({ which }) => {
		if (which === 13) {
			handleSend();
		}
	};

	const handleChange = ({ target }) => {
		setMessage(target.value);
	};

	const handleSend = () => {
		onSend(applyTextFilter(message));
		setMessage('');
	};

	return (
		<Grid container style={{ padding: '20px' }}>
			<Grid item xs={11}>
				<TextField
					id="outlined-basic-email"
					inputProps={{ maxLength }}
					label="Type Something"
					fullWidth
					value={message}
					onChange={(e) => handleChange(e)}
					onKeyPress={(e) => handleKeyPress(e)}
				/>
			</Grid>
			<Grid item xs={1} align="right">
				<Fab color="secondary" aria-label="add" onClick={() => handleSend()}>
					<SendIcon />
				</Fab>
			</Grid>
		</Grid>
	);
};

export default MesssageInput;
