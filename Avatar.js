
import { getImageUrl } from './Utils.js';
export default function Avatar({ person, size }) {
  const imageStyle = {
    width: '10px',
    height: '10px',
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


