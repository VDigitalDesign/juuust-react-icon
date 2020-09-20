import React from 'react';
import PropTypes from 'prop-types';

const Verified = props => {
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
        d="M3.636 16.364c-.756-.756-.973-1.91-.736-3.423C1.662 12.038 1 11.069 1 10c0-1.07.662-2.038 1.9-2.94-.237-1.514-.02-2.668.736-3.424.756-.756 1.91-.973 3.423-.736C7.962 1.662 8.931 1 10 1c1.07 0 2.038.662 2.94 1.9 1.514-.237 2.668-.02 3.424.736.756.756.973 1.91.736 3.423C18.338 7.962 19 8.931 19 10c0 1.07-.662 2.038-1.9 2.94.237 1.514.02 2.668-.736 3.424-.756.756-1.91.973-3.423.736C12.038 18.338 11.069 19 10 19c-1.07 0-2.038-.662-2.94-1.9-1.514.237-2.668.02-3.424-.736zm5.546-5.885l3.512-3.512 1.157 1.157-4.67 4.67L6.15 9.76l1.157-1.157 1.876 1.876z"
      ></path>
    </svg>
  );
};

Verified.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Verified.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Verified;
