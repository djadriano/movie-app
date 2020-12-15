import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppContext } from '../../contexts/App';

import './EpisodesSeason.scss';

const EpisodesSeason = ({ season }) => {
  const { show } = useContext(AppContext);

  return (
    <div className="episodes-season">
      <h2 className="episodes-season__title fs fs--big color color--white title">
        Season
        {' '}
        {season}
      </h2>

      <ul className="episodes-season__list color color--white">
        {
          show.episodes
            .filter((episode) => episode.season === season)
            .map((episode) => (
              <li className="episodes-season__item" key={episode.id}>
                <Link to={`/episode/${episode.id}`} className="episodes-season__link">
                  <span className="episodes-season__counter fs fs--medium title">{episode.number}</span>
                  <div className="episodes-season__description">
                    <h3 className="fs fs--medium">
                      <b>{episode.name}</b>
                    </h3>
                    <time className="fs fs--small">{episode.airdate}</time>
                  </div>
                </Link>
              </li>
            ))
        }
      </ul>
    </div>
  );
};

EpisodesSeason.propTypes = {
  season: PropTypes.number.isRequired,
};

export default EpisodesSeason;
