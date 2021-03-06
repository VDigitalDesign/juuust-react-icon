import React from 'react';
import PropTypes from 'prop-types';

const ChevronsRight = props => {
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
        d="M8.88 4.414L10.294 3 17 9.707l-6.707 6.707L8.88 15l5.292-5.293L8.88 4.414zm-5 0L5.294 3 12 9.707l-6.707 6.707L3.88 15l5.292-5.293L3.88 4.414z"
      ></path>
    </svg>
  );
};

ChevronsRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronsRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronsRight;
