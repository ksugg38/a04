import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import image1 from './image1.jpg'
import image2 from './image2.webp'
import image3 from './image3.png'
import image4 from './image4.avif'
import image5 from './image5.avif'
import image6 from './image6.jpeg'


//To do: radomize image
//Make buttons that allow the user to choose what kind of quote they want

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
const[ronQuote, setRonQuote] = useState("");
useEffect(() =>{
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => response.json())
    .then(data => {
      setRonQuote(data[0])
      ;})
    
   .catch(error => console.error(error));
  }, []);
  return ronQuote
}

function ChooseImage(){
  let images = [image1, image2, image3, image4, image5, image6]
  let randomImage = Math.floor(Math.random() * images.length);
  return images[randomImage];

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<div className="container">
  <img src={ChooseImage()} alt="meme"></img> 
  <div className = "centered"><KanyeQuote/> 
    <br />
    -Kanye
    </div>
</div>


<div className="container">
  <img src={ChooseImage()} alt="meme"></img> 
  <div className = "centered"><RonQuote/> 
    <br />
    -Ron Swanson
    </div>
</div>
</React.StrictMode>
)

reportWebVitals();
