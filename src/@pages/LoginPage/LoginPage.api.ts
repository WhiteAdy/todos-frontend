import { API_BASEPATH } from '@config/constants';
import { ILoginMutationProps } from './LoginPage.types';

const loginPost = async ({ email, password }: ILoginMutationProps) => {
	const res = await fetch(`${API_BASEPATH}/login`, {
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
		method: 'post',
	});

	return res.text().then((data) => (res.ok ? data : Promise.reject(data)));
};

export { loginPost };
