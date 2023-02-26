import { API_BASEPATH, LOCALSTORAGE_JWT_KEY } from '@config/constants';
import { ITodoDelete, ITodoPut } from './TodoList.types';

const todoPut = async ({ id, completed }: ITodoPut) => {
	const jwt = localStorage.getItem(LOCALSTORAGE_JWT_KEY);

	const res = await fetch(`${API_BASEPATH}/todos/${id}`, {
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${jwt?.replaceAll('"', '')}`,
		},
		body: JSON.stringify({ completed }),
		method: 'put',
	});

	if (!res.ok) {
		if (res.status === 401) return Promise.reject(401);
		return res.text().then((errMsg) => Promise.reject(errMsg));
	}

	return res.text();
};

const todoDelete = async ({ id }: ITodoDelete) => {
	const jwt = localStorage.getItem(LOCALSTORAGE_JWT_KEY);

	const res = await fetch(`${API_BASEPATH}/todos/${id}`, {
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${jwt?.replaceAll('"', '')}`,
		},
		method: 'delete',
	});

	if (!res.ok) {
		if (res.status === 401) return Promise.reject(401);
		return res.text().then((errMsg) => Promise.reject(errMsg));
	}

	return res.text();
};

export { todoPut, todoDelete };
