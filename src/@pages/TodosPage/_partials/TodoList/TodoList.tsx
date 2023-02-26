import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { todoDelete, todoPut } from './TodoList.api';
import styles from './TodoList.module.scss';
import { ITodoList } from './TodoList.types';

function TodoList({ items }: ITodoList) {
	const queryClient = useQueryClient();

	const { mutate: patchTodoMutation } = useMutation(todoPut);
	const { mutate: deleteTodoMutation } = useMutation(todoDelete);

	const [activeFilter, setActiveFilter] = useState<
		undefined | 'completed' | 'incompleted'
	>();

	const toggleTodoCompleted = (id: number, completed: boolean) => () => {
		patchTodoMutation({ id, completed: !completed });

		queryClient.setQueryData(['todos'], (oldData: any) =>
			oldData.map((item: any) => {
				return item.id === id
					? { ...item, completed: !completed }
					: { ...item };
			})
		);
	};

	const deleteTodo = (id: number) => () => {
		deleteTodoMutation({ id });

		queryClient.setQueryData(['todos'], (oldData: any) =>
			oldData.filter((item: any) => item.id !== id)
		);
	};

	const filteredItems = items.filter((item) => {
		switch (activeFilter) {
			case 'completed':
				return item.completed;
			case 'incompleted':
				return !item.completed;
			default:
				return item;
		}
	});

	return (
		<>
			<ul className={styles.TodoList}>
				{filteredItems.map(({ id, title, completed }) => (
					<TodoItem
						key={`todo-${id}`}
						id={id}
						label={title}
						onDelete={deleteTodo(id)}
						onChange={toggleTodoCompleted(id, completed)}
						checked={completed}
					/>
				))}
			</ul>
			{items.length > 0 && (
				<div className={styles.filter_container}>
					<span className={styles.show_label}>Show:</span>
					<label>
						<input
							type="radio"
							name="show"
							onChange={() => setActiveFilter(undefined)}
							defaultChecked
						/>
						<span>All</span>
					</label>
					<label>
						<input
							type="radio"
							name="show"
							onChange={() => setActiveFilter('completed')}
						/>
						<span>Completed</span>
					</label>
					<label>
						<input
							type="radio"
							name="show"
							onChange={() => setActiveFilter('incompleted')}
						/>
						<span>Incompleted</span>
					</label>
				</div>
			)}
		</>
	);
}
export default TodoList;
