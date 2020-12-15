import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ id, children }) => {
  const [show, setShow] = useState(null);

  useEffect(async () => {
    const request = await fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=episodes`);

    try {
      const response = await request.json();

      setShow({
        id: response.id,
        name: response.name,
        genres: response.genres.join(', '),
        rating: response.rating.average,
        image: response.image,
        summary: response.summary,
        seasons: response['_embedded'].seasons,
        episodes: response['_embedded'].episodes,
      });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const getEpisode = (episodeId) => {
    const { episodes } = show;
    return episodes.filter((episode) => episode.id === episodeId)[0];
  };

  return (
    <AppContext.Provider value={{ show, getEpisode }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.defaultProps = {
  children: PropTypes.node,
  id: 6771,
};

AppProvider.propTypes = {
  id: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { AppContext, AppProvider };
