import React from 'react';
import PropTypes from 'prop-types';

const Disabled = props => {
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
        d="M14.192 15.606a7 7 0 01-9.799-9.799l9.8 9.8zm1.415-1.414L5.808 4.393a7 7 0 019.798 9.799zM5.104 4.997c-.036.035-.072.07-.107.107l.107-.107zM19 10a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
};

Disabled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Disabled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Disabled;
