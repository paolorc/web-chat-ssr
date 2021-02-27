import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { Box, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	chatSection: {
		width: '80%',
	},
	headBG: {
		backgroundColor: '#e0e0e0',
	},
	borders: {
		borderRight: '1px solid #e0e0e0',
		borderBottom: '1px solid #e0e0e0',
	},
	messageArea: {
		height: '80vh',
		overflowY: 'auto',
	},
	messaContainerLeft: {
		backgroundColor: 'secondary',
		color: 'text.secondary',
		justifyContent: 'end',
	},
	messaContainerRight: {
		backgroundColor: 'primary',
		color: 'text.secondary',
		justifyContent: 'start',
	},
	messageLeft: {
		backgroundColor: theme.palette.secondary.main,
		...theme.palette.message,
	},
	messageRight: {
		backgroundColor: theme.palette.primary.main,
		...theme.palette.message,
	},
}));
const TestChat = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Grid container component={Paper} className={classes.chatSection}>
				<Grid item xs={12} sm={12} md={3} className={classes.borders}>
					<Hidden mdUp>
						<List
							style={{
								display: 'flex',
								flexDirection: 'row',
								padding: 0,
							}}
						>
							<ListItem button key="RemySharp" alignItems="flex-start">
								<ListItemIcon>
									<Avatar
										alt="Remy Sharp 2"
										src="https://material-ui.com/static/images/avatar/1.jpg"
									/>
								</ListItemIcon>
								<ListItemText primary="Remy Sharp2">Remy Sharp</ListItemText>
							</ListItem>

							<Divider variant="inset" component="li" />

							<ListItem button key="RemySharp2" alignItems="flex-start">
								<ListItemIcon>
									<Avatar
										alt="Remy Sharp 2"
										src="https://material-ui.com/static/images/avatar/1.jpg"
									/>
								</ListItemIcon>
								<ListItemText primary="Remy Sharp2">Remy Sharp</ListItemText>
							</ListItem>

							<Divider variant="inset" component="li" />

							<ListItem button key="RemySharp2" alignItems="flex-start">
								<ListItemIcon>
									<Avatar
										alt="Remy Sharp 2"
										src="https://material-ui.com/static/images/avatar/1.jpg"
									/>
								</ListItemIcon>
								<ListItemText primary="Remy Sharp2">Remy Sharp</ListItemText>
							</ListItem>

							<Divider variant="inset" component="li" />
						</List>
					</Hidden>

					<Hidden smDown>
						<List>
							<ListItem
								key="PaoloReyes"
								selected={true}
								onClick={(event) => handleListItemClick(event, 0)}
							>
								<ListItemIcon>
									<Avatar
										alt="Remy Sharp"
										src="https://material-ui.com/static/images/avatar/1.jpg"
									/>
								</ListItemIcon>
								<ListItemText primary="Paolo Reyes"></ListItemText>
								<ListItemText secondary="You" align="right" />
							</ListItem>

							<Divider />

							<ListItem button key="RemySharp" alignItems="flex-start">
								<ListItemIcon>
									<Avatar
										alt="Remy Sharp 2"
										src="https://material-ui.com/static/images/avatar/1.jpg"
									/>
								</ListItemIcon>
								<ListItemText
									primary="Remy Sharp2"
									secondary={
										// <Hidden smDown>
										<Typography
											variant="body2"
											color="primary"
											noWrap
											className={classes.inline}
										>
											This is a very long text in my opinion This is a very
											long text in my opinion
										</Typography>
										// </Hidden>
									}
								>
									Remy Sharp
								</ListItemText>
							</ListItem>

							<Divider variant="inset" component="li" />

							<ListItem button key="RemySharp2" alignItems="flex-start">
								<ListItemIcon>
									<Avatar
										alt="Remy Sharp 2"
										src="https://material-ui.com/static/images/avatar/1.jpg"
									/>
								</ListItemIcon>
								<ListItemText
									primary="Remy Sharp2"
									secondary={
										// <Hidden smDown>
										<Typography
											variant="body2"
											color="primary"
											noWrap
											className={classes.inline}
										>
											This is a very long text in my opinion This is a very
											long text in my opinion
										</Typography>
										// </Hidden>
									}
								>
									Remy Sharp
								</ListItemText>
							</ListItem>

							<Divider variant="inset" component="li" />
						</List>
					</Hidden>
				</Grid>

				<Grid item xs={12} sm={12} md={9}>
					<List className={classes.messageArea}>
						<ListItem key="2" className={classes.messaContainerRight}>
							<Grid container className={classes.messageLeft}>
								<Grid item xs={12}>
									<ListItemText
										align="left"
										secondary="Paolo Reyes"
									></ListItemText>
									<ListItemText
										align="left"
										primary="Hey, Iam Good! What about you ?"
									></ListItemText>
								</Grid>
							</Grid>
						</ListItem>

						<ListItem key="3" className={classes.messaContainerLeft}>
							<Grid container className={classes.messageRight}>
								<Grid item xs={12}>
									<ListItemText align="right" secondary="You"></ListItemText>
									<ListItemText
										align="right"
										primary="I love candy. I love cookies. I love cupcakes.
										I love cheesecake. I love chocolate."
									></ListItemText>
								</Grid>
							</Grid>
						</ListItem>
					</List>

					<Divider />

					<Grid container style={{ padding: '20px' }}>
						<Grid item xs={11}>
							<TextField id="outlined-basic-email" label="Type Something" fullWidth />
						</Grid>
						<Grid item xs={1} align="right">
							<Fab color="secondary" aria-label="add">
								<SendIcon />
							</Fab>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => ({
	allUsers: state.users?.allUsers,
});

export default {
	component: connect(mapStateToProps, {})(TestChat),
};
