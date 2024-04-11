import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function MakeMeme(){
  const[meme, setMeme] = useState("");

  useEffect(() => {

    fetch("http://apimeme.com/meme?meme=Condescending-Wonka&top=Top%20Text&bottom=Bottom%20Text")
    .then(response => response.json())
    .then(json => {
      console.log(json.data.url)
      setMeme(json.data.url);
      
      });
  }, []);

  return <img src={meme}></img>
   
}


function KanyeQuote(){
  const[kanyeQuote, setKanyeQuote] = useState("");

  useEffect(() =>{
    fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => {
        setKanyeQuote(data.quote);
    }).catch(error => console.error(error));
  }, []);
  
  return <p>{kanyeQuote}</p>
}

function RonQuote(){
  const[ronQuote, setRonQuote] = useState("");

  useEffect(() =>{
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(data => {
        setRonQuote(data[0]);
    }).catch(error => console.error(error));
  }, []);

    return <p>{ronQuote}</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RonQuote />
    <KanyeQuote/>
    <MakeMeme />
  </React.StrictMode>
)

reportWebVitals();


//,{
  // method: "GET",
  // mode: "cors"}