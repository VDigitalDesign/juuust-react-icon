import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = props => {
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
      <path d="M5 8l5 4.5L15 8"></path>
    </svg>
  );
};

ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronDown;
