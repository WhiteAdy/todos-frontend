import { ICard } from './Card.types';
import styles from './Card.module.scss';
import clsx from 'clsx';

function Card({ className, children }: ICard) {
	return (
		<div className={clsx(styles.Card, { [className!]: className })}>
			{children}
		</div>
	);
}

export default Card;
