import React from 'react';
import PropTypes from 'prop-types';

const Cart = props => {
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
      <path d="M17 10V6H5l1 6 11-2z"></path>
      <path d="M1 3h3l2 9m0 0l11-2V6H5l1 6z"></path>
      <circle cx="7" cy="16" r="2"></circle>
      <circle cx="16" cy="16" r="2"></circle>
    </svg>
  );
};

Cart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cart;
