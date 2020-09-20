import React from 'react';
import PropTypes from 'prop-types';

const LinkArrowLeft = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19a9 9 0 110-18 9 9 0 010 18zM6.793 9.293l4-4 1.414 1.414L8.914 10l3.293 3.293-1.414 1.414-4-4L6.086 10l.707-.707z"
      ></path>
    </svg>
  );
};

LinkArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LinkArrowLeft;
