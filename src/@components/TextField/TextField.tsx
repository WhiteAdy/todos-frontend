import { ITextField } from './TextField.types';
import styles from './TextField.module.scss';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

function TextField(props: ITextField, ref: ForwardedRef<HTMLInputElement>) {
	const { className, isError, ...restProps } = props;
	return (
		<input
			className={clsx(styles.TextField, {
				[styles.isError]: isError,
				[className!]: className,
			})}
			{...restProps}
			ref={ref}
		/>
	);
}

export default forwardRef(TextField);
