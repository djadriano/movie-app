import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SHOW_ID } from '../utils/constants';

const AppContext = createContext();

const AppProvider = ({ showId, children }) => {
  const [show, setShow] = useState(null);

  async function fetchShow() {
    const request = await fetch(
      `http://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=episodes`,
    );

    try {
      const response = await request.json();
      const {
        id, name, genres, rating, image, summary,
      } = response;

      setShow({
        info: {
          id,
          name,
          genres: genres.join(', '),
          rating: rating.average,
          image,
          summary,
        },
        seasons: response['_embedded'].seasons,
        episodes: response['_embedded'].episodes,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(fetchShow, []);

  return (
    <AppContext.Provider value={{ show }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.defaultProps = {
  children: PropTypes.node,
  showId: SHOW_ID,
};

AppProvider.propTypes = {
  showId: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export { AppContext, AppProvider };
