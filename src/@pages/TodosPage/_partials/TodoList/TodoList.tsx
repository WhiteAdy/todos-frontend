import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoItem from '../TodoItem/TodoItem';
import { todoPatch } from './TodoList.api';
import styles from './TodoList.module.scss';
import { ITodoList } from './TodoList.types';

function TodoList({ items }: ITodoList) {
	const queryClient = useQueryClient();

	const { mutate: patchTodoMutation } = useMutation(todoPatch);
	return (
		<ul className={styles.TodoList}>
			{items.map(({ id, title, completed }) => (
				<TodoItem
					key={`todo-${id}`}
					id={id}
					label={title}
					onDelete={() => {}}
					onChange={() => {
						patchTodoMutation({ id, completed: !completed });
						queryClient.setQueryData(['todos'], (oldData: any) =>
							oldData.map((item: any) => {
								return item.id === id
									? { ...item, completed: !completed }
									: { ...item };
							})
						);
					}}
					checked={completed}
				/>
			))}
		</ul>
	);
}
export default TodoList;
