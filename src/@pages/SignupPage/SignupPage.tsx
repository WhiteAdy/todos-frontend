import { Button, Card, TextField } from '@components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './SignupPage.module.scss';
import { ReactComponent as Logo } from '/public/logo.svg';

const FORM_ID = 'signup-form';

function SignupPage() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onSubmit = (values: Record<string, string>) => {
		console.log('values: ', values);
		console.log('errors: ', errors);
	};

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
				<form
					className={styles.form}
					id={FORM_ID}
					onSubmit={handleSubmit(onSubmit)}
				>
					<TextField
						{...register('fullName', {
							required: 'Please enter your full name',
						})}
						placeholder="Full Name"
						isError={Boolean(errors.fullName)}
					/>
					<TextField
						{...register('email', {
							required: 'Please enter your email',
						})}
						placeholder="Email"
						type="email"
						isError={Boolean(errors.email)}
					/>
					<TextField
						{...register('password', {
							required: 'Please enter your password',
						})}
						placeholder="Password"
						type="password"
						isError={Boolean(errors.password)}
					/>
					<Link to="/login">Do have an account? Sign in.</Link>
					<div className={styles.errors_container}>
						{Object.entries(errors).map(([_key, error], index) => (
							<h6
								key={`signup-error-${index}`}
								className={styles.error}
							>
								* {error!.message as string}
							</h6>
						))}
					</div>
				</form>
				<Button className={styles.submit} form={FORM_ID}>
					Sign Up
				</Button>
			</Card>
		</div>
	);
}

export default SignupPage;
