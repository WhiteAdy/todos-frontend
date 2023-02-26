interface ITextField
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	className?: string;
	isError?: boolean;
}

export type { ITextField };
