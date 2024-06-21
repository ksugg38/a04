import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import image1 from './image1.jpg'
import image2 from './image2.webp'
import image3 from './image3.png'
import image4 from './image4.avif'
import image5 from './image5.avif'
import image6 from './image6.jpeg'


function ChooseImage() {
  let images = [image1, image2, image3, image4, image5, image6]
  let randomImage = Math.floor(Math.random() * images.length);
  return images[randomImage];
}


function Page() {
  const [ronQuote, setRonQuote] = useState("");
  const [kanyeQuote, setKanyeQuote] = useState("");

  const [ronImage, setRonImage] = useState("");
  const [kanyeImage, setKanyeImage] = useState("");

  function handleRonClick() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(data => {
        setRonQuote(data[0]);
        setRonImage(ChooseImage());
      })
      .catch(error => console.error(error));
  }

  function handleKanyeClick(){
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
          setKanyeQuote(data.quote);
          setKanyeImage(ChooseImage());
        })
        .catch(error => console.error(error));
  }

  return (
    <>
      <div className="big_container">
        <div id="box" className="container" hidden={kanyeQuote.length === 0}>
          <img src={kanyeImage} alt="meme"></img>
          <div className="centered">
            {kanyeQuote}
            <br />
            -Kanye West
          </div>
        </div>
        <button className="ron" onClick={handleKanyeClick}> Kanye West</button>
      </div>

      <div className="big_container">
        <div id="box1" className="container" hidden={ronQuote.length === 0}>
          <img src={ronImage} alt="meme"></img>
          <div className="centered">
            {ronQuote}
            <br />
            -Ron Swanson
          </div>
        </div>
        <button className="kanye" onClick={handleRonClick}> Ron Swanson</button>
      </div>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page/>
  </React.StrictMode>
)

reportWebVitals();