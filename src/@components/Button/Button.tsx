import styles from './Button.module.scss';
import { IButton } from './Button.types';
import clsx from 'clsx';

function Button({
	children,
	variant = 'filled',
	className,
	...restProps
}: IButton) {
	return (
		<button
			className={clsx(styles.Button, {
				[styles.filled]: variant === 'filled',
				[styles.transparent]: variant === 'transparent',
				[className!]: className,
			})}
			{...restProps}
		>
			{children}
		</button>
	);
}

export default Button;
