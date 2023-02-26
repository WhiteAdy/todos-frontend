import { Button } from '@components';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.scss';
import { useHeaderButtonProps } from './AppLayout.utils';

function AppLayout() {
	const { label: buttonLabel, onClick } = useHeaderButtonProps();

	return (
		<div className={styles.AppLayout}>
			<header className={styles.header}>
				<Button variant="transparent" type="button" onClick={onClick}>
					{buttonLabel}
				</Button>
			</header>
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
