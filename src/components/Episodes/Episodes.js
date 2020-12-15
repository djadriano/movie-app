import PropTypes from 'prop-types';
import EpisodesSeason from '../EpisodesSeason/EpisodesSeason';

import './Episodes.scss';

const Episodes = ({ seasons }) => (
  <section className="episodes">
    <h1 className="episodes__title fs fs--big title color color--white">Episodes</h1>
    {seasons.map((season) => <EpisodesSeason season={season.number} key={season.number} />)}
  </section>
);

Episodes.propTypes = {
  seasons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Episodes;
