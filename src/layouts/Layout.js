import Main from '../components/Main/Main';
import ShowImage from '../components/ShowImage/ShowImage';
import Content from '../components/Content/Content';

import { AppProvider } from '../contexts/App';

const Layout = () => (
  <AppProvider>
    <Main>
      <ShowImage />
      <Content />
    </Main>
  </AppProvider>
);

export default Layout;
