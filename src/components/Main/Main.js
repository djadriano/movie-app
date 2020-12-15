import PropTypes from 'prop-types';

import './Main.scss';

const Main = ({ children }) => (
  <main className="main">
    {children}
  </main>
);

Main.defaultProps = {
  children: PropTypes.node,
};

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Main;
