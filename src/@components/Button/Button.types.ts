import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface IButton
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: 'transparent' | 'filled' | 'outlined';
	children: ReactNode;
}

export type { IButton };
