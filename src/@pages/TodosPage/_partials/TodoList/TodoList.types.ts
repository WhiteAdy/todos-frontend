interface ITodoList {
	items: Array<{ id: number; title: string; completed: boolean }>;
}

interface ITodoPatch {
	id: number;
	completed: boolean;
}

export type { ITodoList, ITodoPatch };
