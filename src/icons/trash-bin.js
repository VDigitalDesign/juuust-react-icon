import React from 'react';
import PropTypes from 'prop-types';

const TrashBin = props => {
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
        d="M7 2a1 1 0 011-1h4a1 1 0 011 1v1h5v2H2V3h5V2zM4 6h12v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6zm2 11V8h2v9H6zm5-9H9v9h2V8zm1 9V8h2v9h-2z"
      ></path>
    </svg>
  );
};

TrashBin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrashBin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrashBin;
