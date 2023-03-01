/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBookmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment-timezone';
import makeRequest from '../../utils/makeRequest';
import { PATCH_EVENT } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
const Card = ({ eventData, index }) => {
  const navigate = useNavigate();
  const [isBookmark, setIsBookmark] = React.useState(eventData.isBookmarked);
  const time = moment(eventData.datetime);
  // eslint-disable-next-line quotes
  const dateTime = time.tz(eventData.timezone).format("DD MMM YYYY HH:mm z");

  const handleBookmark = async () => {
    await makeRequest(PATCH_EVENT(eventData.id, {
      data: {
        isBookmarked: !isBookmark
      }
    }), navigate);
    setIsBookmark(!isBookmark);
  };

  return (
    <>
      <div className='card' onClick={() => {
        navigate(`/${eventData.id}`);
      }}>
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
              {!eventData.isRegistered && eventData.areSeatsAvailable && <FontAwesomeIcon icon={faCheckCircle} size="2x" color='#42f551' />}

              {!eventData.isRegistered && eventData.areSeatsAvailable && <p>REGISTERED</p>}

              {!eventData.areSeatsAvailable && <FontAwesomeIcon icon={faCircleXmark} size="2x" color='yellow' />}

              {!eventData.areSeatsAvailable && <p id="no-seats">NO SEATS AVAILABLE</p>}

            </div>
            <FontAwesomeIcon icon={faBookmark} size="2x" color={eventData.isBookmarked ? 'red' : 'white'} onClick={handleBookmark} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;