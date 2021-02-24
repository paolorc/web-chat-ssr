import NotFoundPage from './pages/NotFound';
import WelcomePage from './pages/Welcome';
import App from './App';

export default [
	{
		...App,
		routes: [
			{
				...WelcomePage,
				path: '/',
				exact: true,
			},
			{
				...NotFoundPage,
			},
		],
	},
];
