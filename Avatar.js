
import { getImageUrl } from './Utils.js';
export default function Avatar({ person, size }) {
  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover'
  };
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      style={imageStyle}
    />
  );
}


