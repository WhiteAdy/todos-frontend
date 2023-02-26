interface ICheckbox {
	className?: string;
	label: string;
	checked?: boolean;
	onChange?: () => void;
}

export type { ICheckbox };
