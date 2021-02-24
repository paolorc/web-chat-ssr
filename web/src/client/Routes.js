import ChatAppPage from './pages/ChatApp';
import NotFoundPage from './pages/NotFound';
import WelcomePage from './pages/Welcome';
import App from './App';

export default [
	{
		...App,
		routes: [
			{
				...ChatAppPage,
				path: '/chat-app',
				exact: true,
			},
			{
				...WelcomePage,
				path: '/welcome',
				exact: true,
			},
			{
				...NotFoundPage,
			},
		],
	},
];
