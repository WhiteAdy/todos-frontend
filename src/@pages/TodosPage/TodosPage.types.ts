interface ITodoAddMutationProps {
	title: string;
}

type ITodosDTO = Array<{
	id: number;
	title: string;
	completed: boolean;
	userId: number;
}>;

export type { ITodoAddMutationProps, ITodosDTO };
