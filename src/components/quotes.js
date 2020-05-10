import React from 'react'
// import data from '../data'

export default function Quotes(props){
    return(
        
        <div className='jokeText'>
            {props.chuckJoke.map(haha => 
                <div key={haha.id}>
                {/* <img alt="Chuck Joke" src={data[4]} /> */}
                <h1>{haha.joke}</h1>
                </div>
            )}
        </div>
    )

}