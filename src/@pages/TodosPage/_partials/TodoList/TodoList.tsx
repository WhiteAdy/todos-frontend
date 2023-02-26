import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoItem from '../TodoItem/TodoItem';
import { todoDelete, todoPut } from './TodoList.api';
import styles from './TodoList.module.scss';
import { ITodoList } from './TodoList.types';

function TodoList({ items }: ITodoList) {
	const queryClient = useQueryClient();

	const { mutate: patchTodoMutation } = useMutation(todoPut);
	const { mutate: deleteTodoMutation } = useMutation(todoDelete);

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

	return (
		<ul className={styles.TodoList}>
			{items.map(({ id, title, completed }) => (
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
	);
}
export default TodoList;
