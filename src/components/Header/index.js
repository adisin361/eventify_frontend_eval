import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='header'>
        <p onClick={() => {
          navigate('/');
        }}>EVENTIFY</p>
      </div>
      {/* <FontAwesomeIcon icon={faFilter} size="2x" /> */}
    </>
  );
};

export default Header;