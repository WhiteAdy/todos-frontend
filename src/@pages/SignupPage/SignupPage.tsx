import { Card } from '@components';
import styles from './SignupPage.module.scss';
import { ReactComponent as Logo } from '/public/logo.svg';

function SignupPage() {
	return (
		<div className={styles.SignupPage}>
			<Card className={styles.card}>
				<Logo />
				<div className={styles.titleContainer}>
					<h4 className={styles.title}>Welcome!</h4>
					<p className={styles.subtitle}>
						Sign up to start using Simpledo today.
					</p>
				</div>
			</Card>
		</div>
	);
}

export default SignupPage;
