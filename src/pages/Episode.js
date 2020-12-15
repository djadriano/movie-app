import {
  useContext, useState, useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contexts/App';

import ContentHeader from '../components/ContentHeader/ContentHeader';

const Episode = () => {
  const { slug } = useParams();
  const { show, getEpisode } = useContext(AppContext);
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    if (show) {
      setEpisode(getEpisode(Number(slug)));
    }
  }, [show]);

  if (!show || !episode) return null;

  return (
    <ContentHeader
      title={episode.name}
      subtitle="Usa, 2016"
      bottomText={`Season ${episode.season}, Episode ${episode.number}`}
      description={episode.summary}
      image={episode.image ? episode.image.medium : ''}
    />
  );
};

export default Episode;
