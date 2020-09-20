import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
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
      <path d="M17.033 17.176a.834.834 0 01-.833.833H3.833A.834.834 0 013 17.176V9H1l8.44-7.783a.833.833 0 011.12 0L19 9h-1.967v8.176zM9 11v5h2v-5H9z"></path>
    </svg>
  );
};

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Home.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Home;
