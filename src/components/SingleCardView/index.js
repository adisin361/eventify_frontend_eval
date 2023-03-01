import React from 'react';
import './style.css';
import makeRequest from '../../utils/makeRequest';
import { GET_EVENT } from '../../constants/apiEndPoints';
import { useParams } from 'react-router-dom';
// import moment from 'moment-timezone';
import { PATCH_EVENT } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const SingleCardView = () => {
  const [singleCardData, setSingleCardData] = React.useState([]);
  const { eventId } = useParams();
  const id = eventId;
  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(GET_EVENT(id))
      .then((response) => {
        console.log(response);
        setSingleCardData(response);
      });
  }, []);

  const [isBookmark, setIsBookmark] = React.useState(singleCardData.isBookmarked);
  // const time = moment(singleCardData.datetime);
  // eslint-disable-next-line quotes
  // const dateTimee = time.tz(singleCardData.timezone).format('DD MMM YYYY HH:mm z');


  const handleBookmark = async () => {
    await makeRequest(PATCH_EVENT(singleCardData.id, {
      data: {
        isBookmarked: !isBookmark
      }
    }), navigate);
    setIsBookmark(!isBookmark);
  };

  return (
    <>
      <div className='big-card-body'>
        <div className='big-card'>
          <img src={singleCardData.imgUrl}></img>
          <hr width='100%'></hr>
          <div className='big-card-meta-data'>
            <p className='big-card-heading'>{singleCardData.name}</p>
            <div className='big-card-meta-meta-data'>
              <p className='big-card-description'>{singleCardData.description}</p>
              <p className='big-card-venue'><strong>VENUE: </strong>{singleCardData.venue}</p>
              {/* <p className='big-card-date'><strong>DATE: </strong>{dateTimee}</p> */}
            </div>

            <div className='big-card-buttons'>
              <div className='big-card-registration'>
                {!singleCardData.isRegistered && singleCardData.areSeatsAvailable && <FontAwesomeIcon icon={faCheckCircle} size="2x" color='#42f551' />}

                {!singleCardData.isRegistered && singleCardData.areSeatsAvailable && <p>REGISTERED</p>}

                {!singleCardData.areSeatsAvailable && <FontAwesomeIcon icon={faCircleXmark} size="2x" color='yellow' />}

                {!singleCardData.areSeatsAvailable && <p id="no-seats">NO SEATS AVAILABLE</p>}

              </div>
              <FontAwesomeIcon icon={faBookmark} size="2x" color={singleCardData.isBookmarked ? 'red' : 'white'} onClick={handleBookmark} />
            </div>

            {singleCardData.areSeatsAvailable && < button className='register-button'>{singleCardData.isRegistered ? 'REGISTER' : 'UNREGISTER'}</button>}


          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCardView;