import { Button } from '@components';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.scss';

function AppLayout() {
	return (
		<div className={styles.AppLayout}>
			<header className={styles.header}>
				<Button variant="transparent" type="button">
					Logout
				</Button>
			</header>
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
}
export default AppLayout;
