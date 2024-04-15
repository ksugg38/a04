import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import image1 from './image1.jpg'

function KanyeQuote(){
const[kanyeQuote, setKanyeQuote] = useState("");
useEffect(() =>{
  fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => {
      setKanyeQuote(data.quote);})
    .catch(error => console.error(error));
  }, []);
  return kanyeQuote
}




function RonQuote(){
const[ronQuote, setRonQuote] = useState("qwertyuioplkjhgfdsazxcvbnqwertyuioplkjhgfdsazxcvbnqwertyuioplkjhgfdsazxcvbnqwertyuioplkjhgfdsazxcvbn");
useEffect(() =>{
  //while(ronQuote.length >= 100){
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => response.json())
    .then(data => {
      setRonQuote(data[0])
      ;})
    
   .catch(error => console.error(error));
  }, []);
  return <p>{ronQuote}</p>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<div id="container">
  <img src={image1} alt="meme"></img> 

  <div className = "centered"><KanyeQuote/> 
  <br />
  -Kanye
  </div>
  </div>
</React.StrictMode>
)

reportWebVitals();
