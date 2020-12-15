import { useContext } from 'react';
import { AppContext } from '../contexts/App';

import ContentHeader from '../components/ContentHeader/ContentHeader';
import Episodes from '../components/Episodes/Episodes';

const Home = () => {
  const { show } = useContext(AppContext);

  if (!show) return null;

  return (
    <>
      <ContentHeader
        title={show.name}
        subtitle={show.country}
        bottomText={show.genres}
        description={show.summary}
      />
      <Episodes seasons={show.seasons} />
    </>
  );
};

export default Home;
