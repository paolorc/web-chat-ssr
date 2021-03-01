import React from 'react';
import { Fab, Grid, TextField } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

const MesssageInput = ({ onSendClick = () => {}, onChange = () => {}, message = '' }) => {
	const handleKeyPress = ({ which }) => {
		if (which === 13) {
			onSendClick();
		}
	};

	return (
		<Grid container style={{ padding: '20px' }}>
			<Grid item xs={11}>
				<TextField
					id="outlined-basic-email"
					label="Type Something"
					fullWidth
					value={message}
					onChange={(e) => onChange(e)}
					onKeyPress={(e) => handleKeyPress(e)}
				/>
			</Grid>
			<Grid item xs={1} align="right">
				<Fab color="secondary" aria-label="add" onClick={(e) => onSendClick(e)}>
					<SendIcon />
				</Fab>
			</Grid>
		</Grid>
	);
};

export default MesssageInput;
