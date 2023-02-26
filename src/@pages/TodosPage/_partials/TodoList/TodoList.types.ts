interface ITodoList {
	items: Array<{ id: number; title: string; completed: boolean }>;
}

interface ITodoPut {
	id: number;
	completed: boolean;
}

interface ITodoDelete {
	id: number;
}

export type { ITodoList, ITodoPut, ITodoDelete };
