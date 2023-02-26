import { Button, Card, TextField } from '@components';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignupPage.module.scss';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { signupPost } from './SignupPage.api';
import { useMutation } from '@tanstack/react-query';
import { ISignupMutationProps } from './SignupPage.types';
import { useSnackbar } from 'notistack';

const FORM_ID = 'signup-form';

function SignupPage() {
	const {
		handleSubmit,
		register,
		formState: { errors: formErrors },
	} = useForm<ISignupMutationProps>();

	const navitate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const onSubmit = (values: ISignupMutationProps) => mutate(values);

	const { mutate, error: mutationError } = useMutation(signupPost, {
		onSuccess: (responseMsg) => {
			enqueueSnackbar(responseMsg);
			navitate('/login');
		},
	});

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
						isError={Boolean(formErrors.fullName)}
					/>
					<TextField
						{...register('email', {
							required: 'Please enter your email',
						})}
						placeholder="Email"
						type="email"
						isError={Boolean(formErrors.email)}
					/>
					<TextField
						{...register('password', {
							required: 'Please enter your password',
						})}
						placeholder="Password"
						type="password"
						isError={Boolean(formErrors.password)}
					/>
					<Link to="/login">Do have an account? Sign in.</Link>
					<div className={styles.errors_container}>
						<>
							{Object.entries(formErrors).map(([key, error]) => (
								<h6
									key={`signup-error-${key}`}
									className={styles.error}
								>
									* {error!.message as string}
								</h6>
							))}
							{mutationError && (
								<h6 className={styles.error}>
									{mutationError as string}
								</h6>
							)}
						</>
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
