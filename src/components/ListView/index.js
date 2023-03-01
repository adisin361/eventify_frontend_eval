/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../Card';
import makeRequest from '../../utils/makeRequest';
import { useNavigate } from 'react-router-dom';
import { GET_EVENTS } from '../../constants/apiEndPoints';
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

  return (
    <>
      <div className='list-view'>
        {events.map((eachEvent, index) => (
          <Card key={eachEvent.id} eventData={eachEvent} index={index} />
        ))}
      </div>
    </>
  );
};

export default ListView;

