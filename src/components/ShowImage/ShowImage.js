import { useContext } from 'react';
import { AppContext } from '../../contexts/App';

import './ShowImage.scss';

const ShowImage = () => {
  const { show } = useContext(AppContext);

  if (!show) return null;

  return (
    <figure className="show-image">
      <img src={show.image.original} alt="" />
    </figure>
  );
};

export default ShowImage;
