interface ITodoList {
	items: Array<{ id: number; title: string; completed: boolean }>;
}

interface ITodoPut {
	id: number;
	completed: boolean;
}

export type { ITodoList, ITodoPut };
