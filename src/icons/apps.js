import React from 'react';
import PropTypes from 'prop-types';

const Apps = props => {
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
        d="M11 3.25c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25v4.5C18 8.44 17.44 9 16.75 9h-4.5C11.56 9 11 8.44 11 7.75v-4.5zM3.25 11C2.56 11 2 11.56 2 12.25v4.5c0 .69.56 1.25 1.25 1.25h4.5C8.44 18 9 17.44 9 16.75v-4.5C9 11.56 8.44 11 7.75 11h-4.5zm9 0c-.69 0-1.25.56-1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25h-4.5zm-9-9C2.56 2 2 2.56 2 3.25v4.5C2 8.44 2.56 9 3.25 9h4.5C8.44 9 9 8.44 9 7.75v-4.5C9 2.56 8.44 2 7.75 2h-4.5z"
      ></path>
    </svg>
  );
};

Apps.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Apps.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Apps;
