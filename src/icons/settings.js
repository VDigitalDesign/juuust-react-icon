import React from 'react';
import PropTypes from 'prop-types';

const Settings = props => {
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
        d="M14.84 16.471l1.613-1.612-.568-2.064.248-.59L18 11.15V8.87l-1.862-1.059-.243-.59.575-2.064-1.614-1.611-2.063.568-.59-.248L11.15 2H8.87L7.81 3.862l-.59.243-2.063-.576-1.611 1.612.568 2.063-.248.59L2 8.848v2.28l1.86 1.06.244.59-.575 2.064 1.611 1.612 2.064-.568.59.247L8.847 18h2.28l1.06-1.86.59-.244 2.064.575zM10 12a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  );
};

Settings.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Settings.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Settings;
