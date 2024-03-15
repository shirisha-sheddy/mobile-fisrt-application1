import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.jokes);
      })
      .catch((error) => console.error('Error fetching jokes:', error));
  }, []);

  const handleLogOut = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <div className='m-5'>
      <h1 className='text-danger mb-5'>Jokes</h1>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke.joke}</li>
        ))}
      </ul>
      <button className='btn btn-danger mt-5' type="button" onClick={handleLogOut} >Logout</button>
    </div>
  );
};

export default Home;
