import { API_BASEPATH } from '@config/constants';
import { ISignupMutationProps } from './SignupPage.types';

const signupPost = ({ fullName, email, password }: ISignupMutationProps) => {
	return fetch(`${API_BASEPATH}/register`, {
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ fullName, email, password }),
		method: 'post',
	});
};

export { signupPost };
