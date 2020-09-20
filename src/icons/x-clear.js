import React from 'react';
import PropTypes from 'prop-types';

const XClear = props => {
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
        d="M9.293 10L5 5.707 5.707 5 10 9.293 14.293 5l.707.707L10.707 10 15 14.293l-.707.707L10 10.707 5.707 15 5 14.293 9.293 10z"
      ></path>
    </svg>
  );
};

XClear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

XClear.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default XClear;
