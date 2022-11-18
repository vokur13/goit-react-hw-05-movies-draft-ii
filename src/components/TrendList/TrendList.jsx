import { Link } from 'react-router-dom';

export const TrendList = ({ data, onSelect }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id} onClick={() => onSelect(item.id)}>
          <Link to={'movies/:movieId'}></Link>
          {item.title}
        </li>
      ))}
    </ul>
  );
};
