import React from 'react';
import PropTypes from 'prop-types';

const Profile = props => {
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
      <path d="M1 3.883a.883.883 0 01.263-.622.906.906 0 01.63-.261h16.214c.493 0 .893.396.893.883V16a.883.883 0 01-.263.622.905.905 0 01-.63.26H1.893a.9.9 0 01-.632-.258A.877.877 0 011 16V3.883zM3 13v2h14v-2H3zm0-8v6h7V5H3zm9 0v2h5V5h-5zm0 4v2h5V9h-5zM5 7h3v2H5V7z"></path>
    </svg>
  );
};

Profile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Profile.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Profile;
