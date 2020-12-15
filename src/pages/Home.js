import ContentHeader from '../components/ContentHeader/ContentHeader';
import Episodes from '../components/Episodes/Episodes';

const Home = () => (
  <>
    <ContentHeader title="The Powerpuff Girls" subtitle="Usa, 2016" bottomText="Comedy, Action, Science-Fiction" description={'The city of Townsville may be a beautiful, bustling metropolis, but don\'t be fooled! There\'s evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who\'s who of evil, they show what it really means to "fight like a girl."'} />
    <Episodes />
  </>
);

export default Home;
