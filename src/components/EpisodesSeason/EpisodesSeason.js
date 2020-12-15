import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useShow from '../../hooks/useShow';
import { formatDate } from '../../utils/helpers';

import './EpisodesSeason.scss';

const EpisodesSeason = ({ season }) => {
  const { getEpisodesBySeason } = useShow();

  return (
    <div className="episodes-season">
      <h2 className="episodes-season__title fs fs--big color color--white title">
        Season
        {' '}
        {season}
      </h2>

      <ul className="episodes-season__list color color--white">
        {
          getEpisodesBySeason(season)
            .map((episode) => (
              <li className="episodes-season__item" key={episode.id}>
                <Link to={`/episode/${episode.id}`} className="episodes-season__link">
                  <span className="episodes-season__counter fs fs--medium title">{episode.number}</span>
                  <div className="episodes-season__description">
                    <h3 className="fs fs--medium">
                      <b>{episode.name}</b>
                    </h3>
                    {episode.airdate && <time className="fs fs--small">{formatDate(episode.airdate)}</time>}
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
