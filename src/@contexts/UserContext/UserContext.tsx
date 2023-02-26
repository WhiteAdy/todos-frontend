import { LOCALSTORAGE_JWT_KEY } from '@config/constants';
import { useSnackbar } from 'notistack';
import { createContext, useContext, useState } from 'react';
import { IUser, IUserContext, IUserContextProvider } from './UserContext.types';

const INITIAL_USER_CONTEXT_VALUE: IUserContext = {
	user: { id: 0, fullName: '', email: '' },
	setUser: () => {},
	isLoggedIn: false,
	logout: () => {},
};

const UserContext = createContext<IUserContext>(INITIAL_USER_CONTEXT_VALUE);

function UserContextProvider({ children }: IUserContextProvider) {
	const [user, setUser] = useState<IUser>(INITIAL_USER_CONTEXT_VALUE.user);
	const { enqueueSnackbar } = useSnackbar();
	const isLoggedIn = Boolean(user.id);
	const logout = () => {
		localStorage.removeItem(LOCALSTORAGE_JWT_KEY);
		setUser(INITIAL_USER_CONTEXT_VALUE.user);
		enqueueSnackbar('You have been logged out!');
	};

	return (
		<UserContext.Provider value={{ user, setUser, isLoggedIn, logout }}>
			{children}
		</UserContext.Provider>
	);
}

function useUserContext() {
	return useContext(UserContext);
}

export { UserContextProvider, useUserContext };
