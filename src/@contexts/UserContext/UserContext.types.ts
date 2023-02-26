import { Dispatch, ReactNode, SetStateAction } from 'react';

interface IUser {
	id: number;
	fullName: string;
	email: string;
}

interface IUserContext {
	user: IUser;
	setUser: Dispatch<SetStateAction<IUser>>;
	logout: () => void;
	isLoggedIn: boolean;
}

interface IUserContextProvider {
	children: ReactNode;
}

export type { IUser, IUserContext, IUserContextProvider };
