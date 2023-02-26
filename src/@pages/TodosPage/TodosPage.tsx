import { Card } from '@components';
import styles from './TodosPage.module.scss';
import { ReactComponent as Logo } from '/public/logo.svg';

function TodosPage() {
	return (
		<div className={styles.TodosPage}>
			<Card>
				<Logo />
				<div className={styles.titleContainer}>
					<h4 className={styles.title}>Todo List</h4>
				</div>
			</Card>
		</div>
	);
}

export default TodosPage;
