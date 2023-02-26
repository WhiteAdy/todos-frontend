import { ICheckbox } from './Checkbox.types';
import styles from './Checkbox.module.scss';
import clsx from 'clsx';
import { ReactComponent as CheckIcon } from '@assets/check.svg';

function Checkbox({ className, label, checked, onChange }: ICheckbox) {
	return (
		<div className={clsx(styles.Checkbox, { [className!]: className })}>
			<label className={styles.label_wrapper}>
				<input type="checkbox" checked={checked} onChange={onChange} />
				<div className={styles.fake_check_container}>
					<CheckIcon />
				</div>
				{label}
			</label>
		</div>
	);
}
export default Checkbox;
