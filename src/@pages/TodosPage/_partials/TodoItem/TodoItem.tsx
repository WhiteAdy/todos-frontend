import { Checkbox } from '@components';
import styles from './TodoItem.module.scss';
import { ReactComponent as CloseIcon } from '@assets/close.svg';
import { ITodoItem } from './TodoItem.types';

function TodoItem(props: ITodoItem) {
	const { onDelete, id, ...checkboxProps } = props;
	return (
		<div className={styles.TodoItem}>
			<Checkbox {...checkboxProps} />
			<button className={styles.close_btn} onClick={() => onDelete(id)}>
				<CloseIcon />
			</button>
		</div>
	);
}
export default TodoItem;
