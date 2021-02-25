import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import BufferList from '../components/BufferList';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	},
	appBarTitle: {
		flexGrow: 1,
	},
	drawerPaper: {
		width: drawerWidth,
	},
}));

const ChatApp = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar className={classes.appBar} color="default">
				<Toolbar>
					<Typography variant="h6" noWrap>
						#geheimorganisation
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				classes={{
					paper: classes.drawerPaper,
				}}
				variant="permanent"
			>
				<AppBar position="static">
					<Toolbar>
						<Typography className={classes.appBarTitle} variant="h6" noWrap>
							IOVlabs
						</Typography>
					</Toolbar>
				</AppBar>
				<BufferList />
			</Drawer>
		</>
	);
};

const mapStateToProps = (state) => ({
	allUsers: state.users?.allUsers,
});

export default {
	component: connect(mapStateToProps, {})(ChatApp),
};
