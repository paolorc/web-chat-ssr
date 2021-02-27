import ChatAppPage from './pages/ChatApp';
import NotFoundPage from './pages/NotFound';
import WelcomePage from './pages/Welcome';
import App from './App';

export default [
	{
		...App,
		routes: [
			{
				...WelcomePage,
				path: '/welcome',
				exact: true,
			},
			{
				...ChatAppPage,
				path: '/chat-app/:chatId',
				exact: true,
			},
			{
				...NotFoundPage,
			},
		],
	},
];
