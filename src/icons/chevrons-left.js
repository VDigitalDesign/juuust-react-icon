import React from 'react';
import PropTypes from 'prop-types';

const ChevronsLeft = props => {
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
        d="M11.121 15l-1.414 1.414L3 9.707 9.707 3l1.414 1.414-5.293 5.293L11.121 15zm-.293-5.293L16.121 15l-1.414 1.414L8 9.707 14.707 3l1.414 1.414-5.293 5.293z"
      ></path>
    </svg>
  );
};

ChevronsLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronsLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronsLeft;
