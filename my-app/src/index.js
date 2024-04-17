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
      setRonQuote(data[0]);})
   .catch(error => console.error(error));
  }, []);
  return ronQuote
}

function ChooseImage(){
  let images = [image1, image2, image3, image4, image5, image6]
  let randomImage = Math.floor(Math.random() * images.length);
  return images[randomImage];
}


function KanyeButton(){
  function handleClick(){
    let container = document.getElementById("box")
    let hidden = container.getAttribute("hidden");
    if(hidden){
      container.removeAttribute("hidden");
    }else{
      container.setAttribute("hidden", "hidden");
    }

  }

  return (
    <button className="ron" onClick={handleClick}>
      Kanye West
    </button>
  );
}

function RonButton(){
  function handleClick1(){
    let container = document.getElementById("box1")
    let hidden = container.getAttribute("hidden");
    if(hidden){
     container.removeAttribute("hidden");
    }else{
      //window.location.reload();
      container.setAttribute("hidden", "hidden");
     
    }

  }

  



  return (
    <button className="kanye" onClick={handleClick1}>
      Ron Swanson
    </button>
  );
}

function RefreshButton(){
  function handleClick(){
    window.location.reload();

  }

  return(
    <button clasName="refresh" onClick={handleClick}>
      Refresh page
    </button>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  {/* <h1>Inspirational Ron Swanson and Kanye West Quotes</h1> */}


  <div className="big_container">
  <KanyeButton/>

  <div id= "box" className="container" hidden="hidden" >
    <img src={ChooseImage()} alt="meme"></img> 
    <div className = "centered">
      <KanyeQuote/> 
      <br />
      -Kanye West
    </div>
  </div>

  </div>


  

<div className="big_container">
<RonButton/>
<div id= "box1" className="container" hidden="hidden">
  <img src={ChooseImage()} alt="meme"></img> 
  <div className = "centered">
    <RonQuote/> 
    <br />
    -Ron Swanson
    </div>
</div>

</div>

{/* <RefreshButton/> */}

</React.StrictMode>
)

reportWebVitals();
