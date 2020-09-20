import React from 'react';
import PropTypes from 'prop-types';

const LinkArrowRight = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <circle cx="10" cy="10" r="9"></circle>
      <path d="M8.5 6l4 4-4 4"></path>
    </svg>
  );
};

LinkArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkArrowRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LinkArrowRight;
