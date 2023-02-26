interface ITodoAddMutationProps {
	title: string;
}

interface ITodoItem {
	id: number;
	title: string;
	completed: boolean;
	userId: number;
}

type ITodosDTO = Array<ITodoItem>;

export type { ITodoAddMutationProps, ITodoItem, ITodosDTO };
