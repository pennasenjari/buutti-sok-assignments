import './App.css';
import capy1 from './assets/capybara_1.png'; 
import capy2 from './assets/capybara_2.png'; 
import capy3 from './assets/capybara_3.png'; 
import capy4 from './assets/capybara_4.png'; 

const images=[capy1, capy2, capy3, capy4];
// EXTRA: randomize images
const randomImages = images.sort(() => Math.random() - 0.5);

function App() {
  return (
    <div className="container">
      <h1>Capybara Puzzle</h1>
      <div className="puzzle">
        {randomImages.map((image, index) => {
          return <div key={index}><img src={image} /></div>
        })}
      </div>
    </div>
  );
}

export default App;
