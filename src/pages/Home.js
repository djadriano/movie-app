import ContentHeader from '../components/ContentHeader/ContentHeader';
import Episodes from '../components/Episodes/Episodes';
import useShow from '../hooks/useShow';

const Home = () => {
  const { show } = useShow();

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
