import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Quotes from './components/quotes'

function App() {
  const [chuckJoke, setChuckJoke]=useState([])

  useEffect(() => {
    axios
      .get(`http://api.icndb.com/jokes/random/1`)
      // .then(res => console.log(res.data.value))
      .then(res => setChuckJoke(res.data.value))
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  const handleClick = () => {
      axios
        .get(`http://api.icndb.com/jokes/random/1`)
        // .then(res => console.log(res.data.value))
        .then(res => setChuckJoke(res.data.value))
        .catch(error => {
          console.log("error", error);
        });
  }

  return (
    <div className='mainOne'>
      <Quotes chuckJoke={chuckJoke} />
      <div className='new-quote'>
          <button onClick={handleClick} className="button">Chuck Quote</button>
      </div>
    </div>
  );
}

export default App;
