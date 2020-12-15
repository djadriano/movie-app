import EpisodesSeason from '../EpisodesSeason/EpisodesSeason';

import './Episodes.scss';

const Episodes = () => (
  <section className="episodes">
    <h1 className="episodes__title fs fs--big title color color--white">Episodes</h1>
    <EpisodesSeason season="1" />
    <EpisodesSeason season="2" />
    <EpisodesSeason season="3" />
    <EpisodesSeason season="4" />
    <EpisodesSeason season="5" />
    <EpisodesSeason season="6" />
    <EpisodesSeason season="7" />
  </section>
);

export default Episodes;
