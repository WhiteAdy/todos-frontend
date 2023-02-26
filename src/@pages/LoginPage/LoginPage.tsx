import { Button, Card, TextField } from '@components';
import styles from './LoginPage.module.scss';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';
import { loginPost } from './LoginPage.api';
import { ILoginMutationProps } from './LoginPage.types';
import jwt_decode from 'jwt-decode';
import { useUserContext } from '@contexts';
import { LOCALSTORAGE_JWT_KEY } from '@config/constants';

const FORM_ID = 'login-form';

function LoginPage() {
	const {
		handleSubmit,
		register,
		formState: { errors: formErrors },
	} = useForm<ILoginMutationProps>();

	const { enqueueSnackbar } = useSnackbar();
	const { setUser } = useUserContext();

	const { mutate, error: mutationError } = useMutation(loginPost, {
		onSuccess: (jwt) => {
			localStorage.setItem(LOCALSTORAGE_JWT_KEY, jwt);
			setUser(jwt_decode(jwt));
			enqueueSnackbar('Successfully logged in!');
		},
	});

	const onSubmit = (values: ILoginMutationProps) => mutate(values);

	return (
		<div className={styles.LoginPage}>
			<Card className={styles.card}>
				<Logo />
				<div className={styles.titleContainer}>
					<h4 className={styles.title}>Welcome back!</h4>
					<p className={styles.subtitle}>Log in to continue.</p>
				</div>
				<form
					className={styles.form}
					id={FORM_ID}
					onSubmit={handleSubmit(onSubmit)}
				>
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
					<Link to="/signup">Don't have an account? Sign up.</Link>
					<div className={styles.errors_container}>
						{Object.entries(formErrors).map(([key, error]) => (
							<h6
								key={`login-error-${key}`}
								className={styles.error}
							>
								* {error!.message as string}
							</h6>
						))}
						{(mutationError as string) && (
							<h6 className={styles.error}>
								* {mutationError as string}
							</h6>
						)}
					</div>
				</form>
				<Button className={styles.submit} form={FORM_ID}>
					Log in
				</Button>
			</Card>
		</div>
	);
}

export default LoginPage;
