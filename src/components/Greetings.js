import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';
import '../assets/stylesheets/greetings.css';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(fetchGreetings()).catch((error) => {
      console.error(error);
    });
  }, [dispatch]);

  const greetingsAvailable = greetingsData && greetingsData.greeting;

  return (
    <div className="center">
      {greetingsAvailable ? (
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
