import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [chuckJoke, setChuckJoke]=useState([])

  useEffect(() => {
    axios
      .get(`http://api.icndb.com/jokes/random/3`)
      // .then(res => console.log(res.data.value))
      .then(res => setChuckJoke(res.data.value))
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <div >
      {chuckJoke.map(haha => 
        <p key={haha.id}>{haha.joke}</p>)}
    </div>
  );
}

export default App;
