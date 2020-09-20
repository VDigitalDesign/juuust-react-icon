import React from 'react';
import PropTypes from 'prop-types';

const View = props => {
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
        d="M10 3C5.455 3 1.573 5.903 0 10c1.573 4.097 5.455 7 10 7 4.546 0 8.427-2.903 10-7-1.573-4.097-5.454-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"
      ></path>
    </svg>
  );
};

View.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

View.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default View;
