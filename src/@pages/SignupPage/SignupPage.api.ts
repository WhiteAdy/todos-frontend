import { API_BASEPATH } from '@config/constants';
import { ISignupMutationProps } from './SignupPage.types';

const signupPost = async ({
	fullName,
	email,
	password,
}: ISignupMutationProps) => {
	const res = await fetch(`${API_BASEPATH}/register`, {
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ fullName, email, password }),
		method: 'post',
	});

	return res.text().then((data) => (res.ok ? data : Promise.reject(data)));
};

export { signupPost };
