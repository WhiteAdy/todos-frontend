import { ICheckbox } from '@components';

interface ITodoItem extends ICheckbox {
	id: number;
	onDelete: (id: number) => void;
}

export type { ITodoItem };
