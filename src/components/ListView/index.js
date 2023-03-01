/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../Card';
import makeRequest from '../../utils/makeRequest';
import { useNavigate } from 'react-router-dom';
import { GET_EVENTS } from '../../constants/apiEndPoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './style.css';
const ListView = () => {
  const [events, setEvents] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    makeRequest(GET_EVENTS, navigate)
      .then((response) => {
        setEvents(response);
      });
  }, []);

  return events.length !== 0 ? (
    <>
      <div className='filters-body'>
        <div className='filters'>
          <div className='filter-left'>
            <FontAwesomeIcon icon={faFilter} size='2x' />
            <p>Filter</p>
            <FontAwesomeIcon icon={faChevronUp} size='2x' />
          </div>

          <div className='filter-right'>
            <div className='searchBar'>
              <input placeholder='EVENT NAME'></input>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
            </div>
          </div>
        </div>

        <div className='radio-buttons-1'>
          <div className='radio-button-1'>
            <input type='radio' checked></input>
            <p>ALL</p>
          </div>

          <div className='radio-button-2'>
            <input type='radio'></input>
            <p>BOOKMARKED</p>
          </div>
        </div>

        <div className='radio-buttons-2'>
          <div className='radio-button-1'>
            <input type='radio'></input>
            <p>REGISTERED</p>
          </div>

          <div className='radio-button-2'>
            <input type='radio'></input>
            <p>SEATS AVAILABLE</p>
          </div>
        </div>
      </div>

      <div className='list-view'>
        {events.map((eachEvent, index) => (
          <Card key={eachEvent.id} eventData={eachEvent} index={index} />
        ))}
      </div>
    </>
  ) :
    (
      <div className='pageLoader'>
        <p>Loading...</p>
      </div>
    );
};

export default ListView;

