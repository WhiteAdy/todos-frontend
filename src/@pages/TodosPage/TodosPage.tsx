import { Card, TextField } from '@components';
import styles from './TodosPage.module.scss';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { useForm } from 'react-hook-form';
import { ITodoAddMutationProps } from './TodosPage.types';
import { useMutation } from '@tanstack/react-query';
import { addTodoPost } from './TodosPage.api';
import { useSnackbar } from 'notistack';
import { useUserContext } from '@contexts';

const FORM_ID = 'todo-form';

function TodosPage() {
	const {
		handleSubmit,
		register,
		formState: { errors: formErrors },
		reset,
	} = useForm<{ title: string }>();

	const { enqueueSnackbar } = useSnackbar();
	const { logout } = useUserContext();

	const { mutate: addTodoMutation, error: mutationError } = useMutation(
		addTodoPost,
		{
			onSuccess: (data) => {
				console.log('success: ', data);
			},
			onError: (err) => {
				console.log('error: ', err);
				if (err === 401) {
					enqueueSnackbar('Your user session has expired!');
					logout();
				}
			},
		}
	);

	// const onSubmit = (value: ITodoAddMutationProps) => mutate(value);
	const onSubmit = (form: ITodoAddMutationProps) => {
		console.log('submit: ', form);
		reset();
		addTodoMutation(form);
	};

	return (
		<div className={styles.TodosPage}>
			<Card className={styles.card}>
				<Logo />
				<div className={styles.titleContainer}>
					<h4 className={styles.title}>Todo List</h4>
				</div>
				<form
					className={styles.form}
					id={FORM_ID}
					onSubmit={handleSubmit(onSubmit)}
				>
					<TextField
						{...register('title', {
							required: 'Please enter your todo title',
						})}
						placeholder="Add a new todo"
						isError={Boolean(formErrors.title)}
					/>
					{formErrors.title?.message && (
						<h6 className={styles.error}>
							* {formErrors.title.message}
						</h6>
					)}
					{(mutationError as string) && (
						<h6 className={styles.error}>
							* {mutationError as string}
						</h6>
					)}
				</form>
			</Card>
		</div>
	);
}

export default TodosPage;
