import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function MakeMeme(){
  const [imageObjectURL, setImageObjectURL] = useState("");
  

  let quote = KanyeQuote()
  console.log(quote)
  
useEffect(() => {
  //let text = "anything%20I%20want"
  let chooseImage = ChooseImage()
  
  
fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme?meme="+chooseImage+"&top="+quote+"&bottom=Bottom%20Text&font_size=50&font=Impact",{
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '31cb91c9a7msh6f0d885d1e93c71p1aff45jsn5f603a1a4a0b',
    'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
  }})
  .then((response) => {
    const reader = response.body.getReader();
      return new ReadableStream({
    start(controller) {
      return pump();
      function pump() {
        return reader.read().then(({ done, value }) => {
          if (done) {
            controller.close();
            return;
          }
          controller.enqueue(value);
          return pump();
        });
      }
  },
});})
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => {
    setImageObjectURL(URL.createObjectURL(blob));
  })
  .catch((err) => console.error(err))
}, []);
  return <img src={imageObjectURL} alt="meme"></img>;
}






function ChooseImage(){
  // const [images, setImages] = useState([]);

  // useEffect(() => {

  // fetch("https://ronreiter-meme-generator.p.rapidapi.com/images",{
  // method: 'GET',
  // headers: {
  //   'X-RapidAPI-Key': '31cb91c9a7msh6f0d885d1e93c71p1aff45jsn5f603a1a4a0b',
  //   'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
  // }})
  // .then((response) => {
    
  //   let result = response.text()
  //   setImages(result)
  //   console.log(result)
   
 
  // })
  // .catch(error => console.error(error));
  // }, []);
  // return images;


  let images = ["10%20Guy", "1950s%20Middle%20Finger", "1990s%20First%20World%20Problems", "1st%20World%20Canadian%20Problems", "2nd%20Term%20Obama", "Aaaaand%20Its%20Gone", "Ace%20Primo", "Babushkas%20On%20Facebook", "Baby%20Cry", "Baby%20Godfather", "Baby%20Insanity%20Wolf", "Back%20In%20My%20Day", "Bad%20Advice%20Cat", "Bad%20Joke%20Eel", "Bad%20Luck%20Bear", "Bad%20Luck%20Brian", "Bad%20Luck%20Hannah", "Bad%20Pun%20Anna%20Kendrick", "Bad%20Pun%20Dog", "Bad%20Wife%20Worse%20Mom", "Bah%20Humbug", "Bane", "Bane%20Permission", "Barack%20And%20Kumar%202013", "Barba", "Barbosa%20And%20Sparrow", "Barney%20Stinson%20Win", "Baromney", "Baron%20Creater", "Bart%20Simpson%20Peeking", "Batman%20And%20Superman", "Batman%20Slapping%20Robin", "Batman%20Smiles", "Batmobile", "Bazooka%20Squirrel", "Be%20Like%20Bill", "Bear%20Grylls", "Beard%20Baby", "Bebo", "Because%20Race%20Car", "Ben%20Barba%20Pointing", "Bender", "Benito", "Charlie%20Sheen%20Derp", "Chavez", "Chef%20Gordon%20Ramsay", "Chemistry%20Cat", "Chester%20The%20Cat", "Chicken%20Bob", "Chief%20Keef", "Chihuahua%20dog", "Chill%20Out%20Lemur", "Chinese%20Cat", "Chocolate%20Spongebob", "Chubby%20Bubbles%20Girl", "Chuck%20Norris", "Chuck%20Norris%20Approves", "Chuck%20Norris%20Finger", "Chuck%20Norris%20Flex", "Chuck%20Norris%20Guns", "Chuck%20Norris%20Laughing", "Chuck%20Norris%20Phone", "Chuck%20Norris%20With%20Guns", "Chuckchuckchuck", "City%20Bear", "Cleavage%20Girl", "Clefable", "Close%20Enough", "Clown%20Applying%20Makeup", "College%20Freshman", "College%20Liberal", "Comic%20Book%20Guy", "Computer%20Guy", "Computer%20Guy%20Facepalm", "Computer%20Horse", "Condescending%20Goku", "Condescending%20Wonka", "Confession%20Bear", "Confused%20Cam", "Confused%20Gandalf", "Confused%20Granddad", "Confused%20Lebowski", "Confused%20Mel%20Gibson", "Conspiracy%20Keanu", "Consuela", "Contradictory%20Chris", "Cool%20Cat%20Stroll", "Cool%20Obama", "Cool%20Story%20Bro", "Corona", "Costanza", "Coulson", "Courage%20Wolf", "Crazy%20Dawg", "Crazy%20Girlfriend%20Praying%20Mantis", "Crazy%20Hispanic%20Man", "Creeper%20Dog", "Creepy%20Condescending%20Wonka", "Criana", "Crosseyed%20Goku", "Crying%20Because%20Of%20Cute", "Cute%20Cat", "Cute%20Dog", "Cute%20Puppies", "DJ%20Pauly%20D", "Dad%20Joke%20Dog", "Dafuq%20Did%20I%20Just%20Read", "Dallas%20Cowboys", "Dancing%20Trollmom", "Darth%20Maul", "Darti%20Boy", "Dat%20Ass", "Dat%20Boi", "Dating%20Site%20Murderer", "DoucheBag%20DJ", "Doug", "Down%20Syndrome", "Downcast%20Dark%20Souls", "Downvoting%20Roman", "Dr%20Crane", "Dr%20Evil", "Dr%20Evil%20Laser", "Drake%20Bad%20Good", "Drake%20Hotline%20Bling", "Drunk%20Baby", "Duck%20Face", "Duck%20Face%20Chicks", "Dumb%20Blonde", "Dwight%20Schrute", "Dwight%20Schrute%202", "ERMAHGERD%20TWERLERT", "Finding%20Neverland", "Fini", "Finn%20The%20Human", "First%20Day%20On%20The%20Internet%20Kid", "First%20World%20Frat%20Guy", "First%20World%20Problems", "First%20World%20Problems%20Cat", "First%20World%20Stoner%20Problems", "Fk%20Yeah", "Flavor%20Flav", "Foal%20Of%20Mine", "Folean%20Dynamite", "Forever%20Alone", "Forever%20Alone%20Christmas", "Forever%20Alone%20Happy", "Foul%20Bachelor%20Frog", "Foul%20Bachelorette%20Frog", "Friend%20Zone%20Fiona", "Frowning%20Nun", "Frustrated%20Boromir", "Frustrating%20Mom", "Futurama%20Fry", "Futurama%20Leela", "Futurama%20Zoidberg", "Gaga%20Baby", "Gandhi", "Gangnam%20Style", "Gangnam%20Style%20PSY", "Gangnam%20Style2", "Gangster%20Baby", "Gasp%20Rage%20Face", "George%20Bush", "George%20Washington", "Ghetto%20Jesus", "Ghost%20Nappa", "Giovanni%20Vernia", "Give%20me%20Karma%20%20%20Beating%20the%20dead%20horse", "Gladys%20Falcon", "God", "Gollum", "Good%20Fellas%20Hilarious", "Good%20Guy%20Greg", "Good%20Guy%20Pizza%20Rolls", "Good%20Guy%20Putin", "Good%20Guy%20Socially%20Awkward%20Penguin", "Google%20Chrome", "Gordo", "Got%20Room%20For%20One%20More", "Gotta%20Go%20Cat", "Grandma%20Finds%20The%20Internet", "Green%20Day", "Grumpy%20Cat", "Grumpy%20Cat%20Bed", "Grumpy%20Cat%20Birthday", "Grumpy%20Cat%20Christmas", "Grumpy%20Cat%20Does%20Not%20Believe", "Grumpy%20Cat%20Halloween", "Grumpy%20Cat%20Happy", "Grumpy%20Cat%20Mistletoe", "Grumpy%20Cat%20Not%20Amused", "Grumpy%20Cat%20Reverse", "Grumpy%20Cat%20Sky", "Grumpy%20Cat%20Star%20Wars", "Grumpy%20Cat%20Table", "Grumpy%20Cat%20Top%20Hat", "Grumpy%20Cats%20Father", "Grumpy%20Toad", "Grus%20Plan", "Guinness%20World%20Record", "If%20You%20Know%20What%20I%20Mean%20Bean", "Ill%20Have%20You%20Know%20Spongebob", "Ill%20Just%20Wait%20Here", "Im%20Curious%20Nappa", "Im%20Fabulous%20Adam", "Im%20The%20Captain%20Now", "Imagination%20Spongebob", "Impossibru%20Guy%20Original", "Inception", "Inhaling%20Seagull", "Inigo%20Montoya", "Innocent%20Sasha", "Insanity%20Puppy", "Insanity%20Wolf", "Intelligent%20Dog", "Internet%20Explorer", "Internet%20Guide", "Interupting%20Kanye", "Invalid%20Argument%20Vader", "Is%20This%20A%20Pigeon", "Islam%20Rage%20%20%20Angry%20Muslim", "Its%20Finally%20Over", "Its%20Not%20Going%20To%20Happen", "Its%20True%20All%20of%20It%20Han%20Solo", "Jack%20Nicholson%20The%20Shining%20Snow", "Jack%20Sparrow%20Being%20Chased", "Jackie%20Chan%20WTF", "Jammin%20Baby", "Jay%20Knows%20Facts", "Jehovas%20Witness%20Squirrel", "Jerkoff%20Javert", "Jersey%20Santa", "Jessica%20Nigri%20Cosplay", "Jesus%20Talking%20To%20Cool%20Dude", "Jim%20Lehrer%20The%20Man", "Joe%20Biden", "John%20Riley%20Condescension", "Joker", "Marvel%20Civil%20War", "Marvel%20Civil%20War%201", "Marvel%20Civil%20War%202", "Matanza", "Matrix%20Morpheus", "Maury%20Lie%20Detector", "Mayu%20Watanabe", "McKayla%20Maroney%20Not%20Impressed", "McKayla%20Maroney%20Not%20Impressed2", "McMelch", "Mega%20Rage%20Face", "Member%20Berries", "Meme%20Dad%20Creature", "Memeo", "Men%20In%20Black", "Men%20Laughing", "Merida%20Brave", "Metal%20Jesus", "Mexican%20Pizza", "Michael%20Jackson%20Popcorn", "Michael%20Phelps%20Death%20Stare", "Minegishi%20Minami", "Not%20Bad%20Obama", "Not%20Okay%20Rage%20Face", "Not%20a%20Meme,%20Just%20Boobs", "Nuclear%20Explosion", "OMG%20Cat", "OMG%20Karen", "Obama", "Obama%20Cowboy%20Hat", "Obama%20No%20Listen", "Obama%20Romney%20Pointing", "Obi%20Wan%20Kenobi", "Oblivious%20Hot%20Girl", "Officer%20Cartman", "Oh%20My%20God%20Orange", "Oh%20No", "Okay%20Guy%20Rage%20Face", "Okay%20Guy%20Rage%20Face2", "Okay%20Truck", "Oku%20Manami", "Onde", "One%20Does%20Not%20Simply", "Oprah%20You%20Get%20A", "Oprah%20You%20Get%20A%20Car%20Everybody%20Gets%20A%20Car", "Optimistic%20Niall", "Ordinary%20Muslim%20Man", "Original%20Bad%20Luck%20Brian", "Original%20I%20Lied", "Original%20Stoner%20Dog", "Osabama", "Our%20Glorious%20Leader%20Nicolas%20Cage", "Over%20Educated%20Problems", "Overjoyed", "Overly%20Attached%20Father", "Overly%20Attached%20Girlfriend", "Overly%20Attached%20Nicolas%20Cage", "Overly%20Manly%20Man", "Overly%20Suave%20IT%20Guy", "PPAP", "PTSD%20Clarinet%20Boy", "Packers", "Panik%20Kalm%20Panik", "Papa%20Fking%20John", "Paranoid%20Parrot", "Pat%20Quinn", "Pathetic%20Spidey", "Patrick%20Bateman", "Patrick%20Henry", "Romney%20Bong", "Romneys%20Hindenberg", "Ron%20Burgundy", "Ron%20Swanson", "Running%20Away%20Balloon", "Ryan%20Gosling", "Sad%20Axl", "Sad%20Baby", "Sad%20Cat", "Sad%20Keanu", "Sad%20Pablo%20Escobar", "Sad%20Spiderman", "Sad%20X%20All%20The%20Y","Skype", "Sleeping%20Shaq", "Slenderman", "Slick%20Fry", "Slowpoke", "Small%20Dog", "Small%20Face%20Romney", "Smilin%20Biden", "Smiling%20Cat", "Smiling%20Jesus",  "Will%20Ferrell", "Wink", "Woah%20Kitty", "Woman%20Yelling%20At%20Cat", "Wrong%20Neighboorhood%20Cats", "Wrong%20Number%20Rita", "X,%20X%20Everywhere", "X%20All%20The%20Y", "X%20Everywhere", "X%20X%20Everywhere", "Y%20U%20No", "Yakuza", "Yall%20Got%20Any%20More%20Of", "Yall%20Got%20Any%20More%20Of%20That", "Yao%20Ming", "Yo%20Dawg%20Heard%20You", "Yo%20Mamas%20So%20Fat", "You%20Dont%20Say", "You%20Dont%20Want%20No%20Part%20Of%20This", "You%20Get%20An%20X%20And%20You%20Get%20An%20X", "You%20Should%20Feel%20Bad%20Zoidberg", "You%20The%20Real%20MVP", "You%20The%20Real%20MVP%202", "You%20Underestimate%20My%20Power", "You%20Were%20The%20Chosen%20One%20Star%20Wars", "Young%20And%20Reckless", "Young%20Cardi%20B", "Youre%20Too%20Slow%20Sonic", "Yuko%20With%20Gun", "ZNMD", "Zoidberg%20Jesus", "Zombie%20Bad%20Luck%20Brian", "Zombie%20Overly%20Attached%20Girlfriend", "Zorg", "Zuckerberg", "Zura%20Janai%20Katsura%20Da", "confession%20kid"]
  let randomImage = Math.floor(Math.random() * images.length);
  return images[randomImage];


}



function KanyeQuote(){
const[kanyeQuote, setKanyeQuote] = useState("");
useEffect(() =>{
  fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => {
      setKanyeQuote(data.quote);})
    .catch(error => console.error(error));
  }, []);

  kanyeQuote.replaceAll(" ", "%20")
  //console.log(typeof kanyeQuote)
  //return <p>{kanyeQuote}</p>
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
  {/* <RonQuote /> */}
  
  <MakeMeme />
  {/* <KanyeQuote/> */}
</React.StrictMode>
)

reportWebVitals();
