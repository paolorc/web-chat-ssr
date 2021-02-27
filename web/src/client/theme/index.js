import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#757575',
		},
		secondary: {
			main: '#01579b',
		},
		message: {
			color: 'white',
			borderRadius: '10px',
			maxWidth: '60%',
			padding: '10px',
		},
		text: {
			chat: 'white',
			secondary: '#bdbdbd',
		},
	},
});

export default theme;
