import React from 'react';
import PropTypes from 'prop-types';

const Chart = props => {
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
        d="M9 1.055V11h9.945A9.001 9.001 0 119 1.055zm2 0V9h7.945A9.004 9.004 0 0011 1.055z"
      ></path>
    </svg>
  );
};

Chart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Chart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Chart;
