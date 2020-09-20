import React from 'react';
import PropTypes from 'prop-types';

const Plus = props => {
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
      <path d="M1 10h18m-9-9v18"></path>
    </svg>
  );
};

Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Plus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Plus;
