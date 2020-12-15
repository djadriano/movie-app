import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './EpisodesSeason.scss';

const EpisodesSeason = ({ season }) => (
  <div className="episodes-season">
    <h2 className="episodes-season__title fs fs--big color color--white title">
      Season
      {' '}
      {season}
    </h2>

    <ul className="episodes-season__list color color--white">
      <li className="episodes-season__item">
        <Link to="/episode/1" className="episodes-season__link">
          <span className="episodes-season__counter fs fs--medium title">1</span>
          <div className="episodes-season__description">
            <h3 className="fs fs--medium">
              <b>Sister, Sister</b>
            </h3>
            <time className="fs fs--small">Apr 4, 2016</time>
          </div>
        </Link>
      </li>
    </ul>
  </div>
);

EpisodesSeason.propTypes = {
  season: PropTypes.string.isRequired,
};

export default EpisodesSeason;
