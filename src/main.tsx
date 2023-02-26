import { UserContextProvider } from '@contexts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { SnackbarProvider, SnackbarProviderProps } from 'notistack';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const snackbarProviderProps: Omit<SnackbarProviderProps, 'children'> = {
	autoHideDuration: 3500,
	anchorOrigin: {
		vertical: 'bottom' as const,
		horizontal: 'center' as const,
	},
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<UserContextProvider>
					<SnackbarProvider {...snackbarProviderProps}>
						<App />
					</SnackbarProvider>
				</UserContextProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
