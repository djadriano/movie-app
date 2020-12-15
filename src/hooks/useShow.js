import { useContext } from 'react';

import { AppContext } from '../contexts/App';

function useShow() {
  const { show } = useContext(AppContext);

  if (!show) return { show: null };

  function getEpisode(episodeId = 0) {
    return show.episodes.filter((episode) => episode.id === episodeId)[0];
  }

  function getEpisodesBySeason(season = 0) {
    return show.episodes.filter((episode) => episode.season === season);
  }

  function getSeasons() {
    return show.seasons;
  }

  return {
    show: show ? show.info : null,
    getEpisode,
    getEpisodesBySeason,
    getSeasons,
  };
}

export default useShow;
