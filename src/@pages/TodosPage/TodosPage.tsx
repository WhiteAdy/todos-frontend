import { Card, TextField } from '@components';
import styles from './TodosPage.module.scss';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { useForm } from 'react-hook-form';
import { ITodoAddMutationProps, ITodoItem, ITodosDTO } from './TodosPage.types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTodoPost, todosGet } from './TodosPage.api';
import { useSnackbar } from 'notistack';
import { useUserContext } from '@contexts';
import { TodoList } from './_partials';

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
	const queryClient = useQueryClient();

	const { data: todos } = useQuery(['todos'], todosGet, {
		select: (data: ITodosDTO) => {
			return data.map(({ id, title, completed }) => ({
				id,
				title,
				completed,
			}));
		},
		initialData: [],
		onError: (err) => {
			if (err === 401) {
				enqueueSnackbar('Your user session has expired!');
				logout();
			}
		},
	});

	const { mutate: addTodoMutation, error: mutationError } = useMutation(
		addTodoPost,
		{
			onSuccess: (newItem: ITodoItem) => {
				queryClient.setQueryData(['todos'], (oldData: any) => [
					...oldData,
					newItem,
				]);
			},
			onError: (err) => {
				if (err === 401) {
					enqueueSnackbar('Your user session has expired!');
					logout();
				}
			},
		}
	);

	const onSubmit = (form: ITodoAddMutationProps) => {
		addTodoMutation(form);
		reset();
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
				<TodoList items={todos} />
			</Card>
		</div>
	);
}

export default TodosPage;
