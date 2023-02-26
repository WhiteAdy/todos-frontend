import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';
import { ITodoList } from './TodoList.types';

function TodoList({ items }: ITodoList) {
	return (
		<ul className={styles.TodoList}>
			{items.map(({ id, title }) => (
				<TodoItem
					key={`todo-${id}`}
					id={id}
					label={title}
					onDelete={() => {}}
				/>
			))}
		</ul>
	);
}
export default TodoList;
