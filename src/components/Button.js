import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonHome extends React.Component {
  render() {
    const { text, testId, linkTo, className } = this.props;
    return (
      <Link to={ linkTo }>
        <button type="button" className={ className } data-testid={ testId }>
          { text }
        </button>
      </Link>
    );
  }
}

ButtonHome.propTypes = {
  text: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ButtonHome;
