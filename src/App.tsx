import { useUserContext } from '@contexts';
import { AppLayout } from '@layouts';
import { LoginPage, SignupPage, TodosPage } from '@pages';
import { useLayoutEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LOCALSTORAGE_JWT_KEY } from '@config/constants';

function App() {
	const { isLoggedIn, setUser } = useUserContext();

	useLayoutEffect(() => {
		const userJwt = localStorage.getItem(LOCALSTORAGE_JWT_KEY);
		if (userJwt) setUser(jwt_decode(userJwt));
	}, []);

	if (!isLoggedIn) {
		return (
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route index element={<Navigate to="/login" />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Route>
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<TodosPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
}

export default App;
