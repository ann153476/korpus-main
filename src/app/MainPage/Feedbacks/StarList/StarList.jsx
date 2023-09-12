import Star from '../Star/Star';
import s from './StarList.module.scss';

export default function StarList({ rating }) {
  return (
    <ul className={s.starList}>
      <li>
        <Star rating={rating} value={1} />
      </li>
      <li>
        <Star rating={rating} value={2} />
      </li>
      <li>
        <Star rating={rating} value={3} />
      </li>
      <li>
        <Star rating={rating} value={4} />
      </li>
      <li>
        <Star rating={rating} value={5} />
      </li>
    </ul>
  );
}
