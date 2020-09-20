import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
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
      <path d="M9.222 15.445A6.222 6.222 0 109.222 3a6.222 6.222 0 000 12.445z"></path>
      <path d="M17 17l-3.383-3.383"></path>
    </svg>
  );
};

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Search.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Search;
