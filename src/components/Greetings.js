import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(fetchGreetings()).catch((error) => {
      console.error('Error fetching greetings:', error);
    });
  }, [dispatch]);

  return (
    <div className="center">
      {greetingsData.greeting.length > 0 ? (
        <h2>{greetingsData.greeting}</h2>
      ) : (
        <p>No greetings available</p>
      )}

      <button onClick={() => dispatch(fetchGreetings())} className="greeting-btn" type="button">
        Get Greeting
      </button>
    </div>
  );
}


export default Greetings;
