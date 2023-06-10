import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Dashboard from '../Layout/Dashboard';
import ManageUsers from '../pages/Dashboard/ManageUsers/ManageUsers';
import ManageClasses from '../pages/Dashboard/ManageClasses/ManageClasses';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: 'login',
				element: <Login></Login>,
			},
			{
				path: 'signup',
				element: <Register></Register>,
			},
		],
	},
	{
		path: 'dashboard',
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		children: [
			{
				path: 'manageusers',
				element: <ManageUsers></ManageUsers>,
			},
			{
				path: 'manageclasses',
				element: <ManageClasses></ManageClasses>,
			},
		],
	},
]);
