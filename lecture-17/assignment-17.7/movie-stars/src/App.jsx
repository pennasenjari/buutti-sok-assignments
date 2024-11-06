import './App.css';
import Star from './Star.jsx';

function App() {

  const movieStars = [{
    name: "Margot Robbie",
    image: "https://www.telegraph.co.uk/content/dam/films/2023/07/24/TELEMMGLPICT000342425474_16901995254800_trans_NvBQzQNjv4BqD7f7Af84wIzwDlBm-xXtLOhoUuTm1Soe-YLnA1ie1QA.jpeg?imwidth=680",
    knownFor: ["Barbie", "Suicide Squad", "The Wolf of Wall Street"]},{
    name: "Sofia Vergara",
    image: "https://ew.com/thmb/1211mu3LGNf9vyc_ZftmASoDGRM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sofia-vergara-agt-091423-77dce41315994410b6d63cb11d8261c1.jpg",
    knownFor: ["Hot Pursuit","Fading Gigolo"]},{
    name: "Grace Kelly",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GcrIFlCP1goAPV1KS0BO_r7qwoAuCk-9g&s",
    knownFor:  ["Mogambo", "The Bridges at Toko-Ri"]
  }];

  return (
    <div className="stars">
      <h1>Movie Stars</h1>
      {movieStars.map((star) => 
        <Star key={star.name} name={star.name} image={star.image} knownFor={star.knownFor}/>
      )}
    </div>
  )
}

export default App;