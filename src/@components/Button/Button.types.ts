import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface IButton
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: 'filled' | 'transparent';
	className?: string;
	children: ReactNode;
}

export type { IButton };
