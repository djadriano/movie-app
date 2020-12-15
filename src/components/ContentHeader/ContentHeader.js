/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';

import './ContentHeader.scss';

const ContentHeader = ({
  title,
  subtitle,
  rating,
  bottomText,
  description,
  image,
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

    {image && <img src={image} alt="" className="content-header__image" />}

    <p
      className="content-header__description fs fs--medium color color--white"
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  </>
);

ContentHeader.defaultProps = {
  subtitle: '',
  rating: '',
  bottomText: '',
  description: '',
  image: '',
};

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  rating: PropTypes.string,
  bottomText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default ContentHeader;
