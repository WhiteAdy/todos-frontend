import { ReactNode } from 'react';

interface IUser {
	id: number;
	email: string;
}

interface IUserContextProvider {
	children: ReactNode;
}

export type { IUser, IUserContextProvider };
