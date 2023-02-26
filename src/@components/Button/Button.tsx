import styles from './Button.module.scss';
import { IButton } from './Button.types';
import clsx from 'clsx';

function Button({ children, variant, ...restProps }: IButton) {
	return (
		<button
			className={clsx(styles.Button, {
				[styles.transparent]: variant === 'transparent',
			})}
			{...restProps}
		>
			{children}
		</button>
	);
}

export default Button;
