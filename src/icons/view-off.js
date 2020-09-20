import React from 'react';
import PropTypes from 'prop-types';

const ViewOff = props => {
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
        d="M14.55 15.963l2.743 2.744 1.414-1.414-16-16-1.414 1.414L3.69 5.105A11.061 11.061 0 000 10c1.573 4.097 5.455 7 10 7 1.627 0 3.168-.372 4.55-1.037zm-1.793-1.792l-1.463-1.462c-.391.187-.83.291-1.294.291-1.66 0-3-1.34-3-3 0-.464.105-.903.292-1.294L5.829 7.243a5.002 5.002 0 006.928 6.928zM20 10.001a11.117 11.117 0 01-2.206 3.554l-2.844-2.844A5.002 5.002 0 009.289 5.05L7.53 3.293A10.489 10.489 0 0110 3c4.546 0 8.427 2.903 10 7z"
      ></path>
    </svg>
  );
};

ViewOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ViewOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ViewOff;
