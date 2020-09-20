import React from 'react';
import PropTypes from 'prop-types';

const Copy = props => {
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
      <path d="M5.478 4.578V1.894A.894.894 0 016.372 1h10.733a.895.895 0 01.895.894v12.522a.895.895 0 01-.895.895h-2.683v2.795a.897.897 0 01-.9.894H2.8a.896.896 0 01-.901-.894l.003-12.634c0-.494.402-.894.9-.894h2.675zm1.789 0h7.155v8.944h1.789V2.789H7.267v1.789z"></path>
    </svg>
  );
};

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Copy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Copy;
