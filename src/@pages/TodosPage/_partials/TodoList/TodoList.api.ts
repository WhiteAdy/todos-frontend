import { API_BASEPATH, LOCALSTORAGE_JWT_KEY } from '@config/constants';
import { ITodoPatch } from './TodoList.types';

const todoPatch = async ({ id, completed }: ITodoPatch) => {
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

export { todoPatch };
