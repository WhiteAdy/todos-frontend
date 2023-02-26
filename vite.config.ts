import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "src/@config/_vars.scss" as *;`,
			},
		},
	},
});
