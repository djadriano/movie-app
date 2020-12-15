import PropTypes from 'prop-types';

import './ContentHeader.scss';

const ContentHeader = ({
  title, subtitle, rating, bottomText, description,
}) => (
  <>
    <header className="content-header color color--white">
      <h1 className="fs fs--bigger title">{title}</h1>
      <h4 className="fs fs--small">{subtitle}</h4>
      {rating && <span className="fs fs--small">{rating}</span>}
      <p className="fs fs--small color color--gray-light">
        <b>{bottomText}</b>
      </p>
    </header>
    <p className="content-header__description fs fs--medium color color--white">{description}</p>
  </>
);

ContentHeader.defaultProps = {
  subtitle: '',
  rating: '',
  bottomText: '',
  description: '',
};

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  rating: PropTypes.string,
  bottomText: PropTypes.string,
  description: PropTypes.string,
};

export default ContentHeader;
