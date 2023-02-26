import { ICard } from './Card.types';
import styles from './Card.module.scss';

function Card({ children }: ICard) {
	return <div className={styles.Card}>{children}</div>;
}

export default Card;
