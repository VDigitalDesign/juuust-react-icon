import React from 'react';
import PropTypes from 'prop-types';

const Access = props => {
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
        d="M9 5a4.002 4.002 0 01-3 3.874V13h3v2H6v2h4v2H4V8.874A4.002 4.002 0 015 1a4 4 0 014 4zM5 7a2 2 0 100-4 2 2 0 000 4zm7-2h7v4h-7V5zm0 6h7v4h-7v-4z"
      ></path>
    </svg>
  );
};

Access.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Access.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Access;
