/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment-timezone';

// const time = moment(eventDetails.datetime);
//   const dateTime = time.tz(eventDetails.timezone).format("DD MMM YYYY HH:mm z");
const Card = ({ eventData, index }) => {

  const time = moment(eventData.datetime);
  // eslint-disable-next-line quotes
  const dateTime = time.tz(eventData.timezone).format("DD MMM YYYY HH:mm z");
  return (
    <>
      <div className='card'>
        <img src={eventData.imgUrl}></img>
        <hr width='100%'></hr>
        <div className='card-meta-data'>
          <p className='card-heading'>{eventData.name}</p>
          <div className='card-meta-meta-data'>
            <p className='card-description'>{eventData.description}</p>
            <p className='card-venue'><strong>VENUE: </strong>{eventData.venue}</p>
            <p className='card-date'><strong>DATE: </strong>{dateTime}</p>
          </div>

          <div className='card-buttons'>
            <div className='card-registration'>
              <FontAwesomeIcon icon={faCheckCircle} size="2x" color='#42f551' />
              <p>REGISTERED</p>
            </div>
            <FontAwesomeIcon icon={faBookmark} size="2x" color='red' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;