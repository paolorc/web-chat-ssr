import React from 'react';
import { Hidden, List } from '@material-ui/core';

import Chat from '../Chat';
import UserInfo from '../UserInfo';

const ChatsPanel = () => {
	return (
		<>
			<Hidden mdUp>
				<List
					style={{
						display: 'flex',
						flexDirection: 'row',
						padding: 0,
					}}
				>
					<Chat
						avatarUrl="https://material-ui.com/static/images/avatar/2.jpg"
						id="342"
						isSelected={false}
						userName="Paolo"
						userLastName="Reyes"
					/>

					<Chat
						avatarUrl="https://material-ui.com/static/images/avatar/5.jpg"
						id="23432"
						userName="Ricardo"
						userLastName="Loza"
					/>
				</List>
			</Hidden>

			<Hidden smDown>
				<List>
					<UserInfo
						avatarUrl="https://material-ui.com/static/images/avatar/1.jpg"
						userName="Paolo"
						userLastName="Reyes"
						withDivider
					/>

					<Chat
						avatarUrl="https://material-ui.com/static/images/avatar/2.jpg"
						userName="Loza"
						userLastName="Lima"
						lastMessage="This is a very long text in my opinion This is a very long text in my opinion"
					/>

					<Chat
						avatarUrl="https://material-ui.com/static/images/avatar/5.jpg"
						userName="Ricardo"
						userLastName="Loza"
						lastMessage="This is a very long text in my opinion This is a very long text in my opinion"
					/>
				</List>
			</Hidden>
		</>
	);
};

export default ChatsPanel;
