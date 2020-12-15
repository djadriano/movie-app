import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import useShow from '../hooks/useShow';
import { formatDate } from '../utils/helpers';

const Episode = () => {
  const { slug } = useParams();
  const { show, getEpisode } = useShow();

  if (!show) return null;

  const episode = getEpisode(Number(slug));

  if (!episode) return null;

  const {
    name, season, number, summary, image, airdate,
  } = episode;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentHeader
      title={name}
      subtitle={formatDate(airdate)}
      bottomText={`Season ${season}, Episode ${number}`}
      description={summary}
      image={image ? image.medium : ''}
    />
  );
};

export default Episode;
