import useShow from '../../hooks/useShow';

import './ShowImage.scss';

const ShowImage = () => {
  const { show } = useShow();

  if (!show) return null;

  return (
    <figure className="show-image">
      <img src={show.image.original} alt="" />
    </figure>
  );
};

export default ShowImage;
