import { useLocation, useNavigate } from 'react-router-dom';

function useHeaderButtonProps() {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	switch (pathname) {
		case '/login':
			return {
				label: 'Signup',
				onClick: () => {
					navigate('/signup');
				},
			};
		case '/signup':
			return {
				label: 'Login',
				onClick: () => {
					navigate('/login');
				},
			};
		default:
			return {
				label: 'Logout',
				onClick: () => {
					navigate('/login');
				},
			};
	}
}

export { useHeaderButtonProps };
