import { createContext, useContext } from 'react';
import { IUser, IUserContextProvider } from './UserContext.types';

const INITIAL_USER_CONTEXT_VALUE = { id: 0, email: '' };

const UserContext = createContext<IUser>(INITIAL_USER_CONTEXT_VALUE);

function UserContextProvider({ children }: IUserContextProvider) {
	return (
		<UserContext.Provider value={INITIAL_USER_CONTEXT_VALUE}>
			{children}
		</UserContext.Provider>
	);
}

function useUserContext() {
	return useContext(UserContext);
}

export { UserContextProvider, useUserContext };
