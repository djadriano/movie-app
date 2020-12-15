import EpisodesSeason from '../EpisodesSeason/EpisodesSeason';
import useShow from '../../hooks/useShow';

import './Episodes.scss';

const Episodes = () => {
  const { getSeasons } = useShow();

  return (
    <section className="episodes">
      <h1 className="episodes__title fs fs--big title color color--white">
        Episodes
      </h1>

      {getSeasons().map(({ number }) => (
        <EpisodesSeason season={number} key={number} />
      ))}
    </section>
  );
};

export default Episodes;
