import { AppLayout } from '@layouts';
import { TodosPage } from '@pages';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route path="*" element={<Navigate to="/" />} />
				<Route index element={<TodosPage />} />
			</Route>
		</Routes>
	);
}

export default App;
