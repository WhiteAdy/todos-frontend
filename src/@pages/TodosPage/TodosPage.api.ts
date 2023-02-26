import { API_BASEPATH, LOCALSTORAGE_JWT_KEY } from '@config/constants';
import { ITodoAddMutationProps } from './TodosPage.types';

const addTodoPost = async ({ title }: ITodoAddMutationProps) => {
	const jwt = localStorage.getItem(LOCALSTORAGE_JWT_KEY);

	const res = await fetch(`${API_BASEPATH}/todos`, {
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${jwt?.replaceAll('"', '')}`,
		},
		body: JSON.stringify({ title }),
		method: 'post',
	});

	if (!res.ok) {
		if (res.status === 401) return Promise.reject(401);
		return res.text().then((errMsg) => Promise.reject(errMsg));
	}

	return res.json();
};

const todosGet = async () => {
	const jwt = localStorage.getItem(LOCALSTORAGE_JWT_KEY);

	const res = await fetch(`${API_BASEPATH}/todos`, {
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${jwt?.replaceAll('"', '')}`,
		},
	});

	if (!res.ok) {
		if (res.status === 401) return Promise.reject(401);
		return res.text().then((errMsg) => Promise.reject(errMsg));
	}

	return res.json();
};

export { addTodoPost, todosGet };
