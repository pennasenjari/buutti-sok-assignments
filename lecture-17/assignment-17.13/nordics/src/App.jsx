import './App.css';
import Country from './Country';

function App() {

  const countries = [
    { id: 0, countryName: "Finland", population: 5_563_197, independenceDay: "6-12-1917",
      isIsland: false, colorsInFlag: ["blue", "white"] },
    { id: 1, countryName: "Sweden", population: 10_529_000, independenceDay: "6-6-1523",
      isIsland: false, colorsInFlag: ["blue", "yellow"]},
    { id: 2, countryName: "Norway", population: 5_550_203, independenceDay: "7-6-1905",
      isIsland: false, colorsInFlag: ["blue", "white", "red"] },
    { id: 3, countryName: "Denmark", population: 5_932_654, independenceDay: "old as heaven",
      isIsland: false, colorsInFlag: ["red", "white"] },
    { id: 4, countryName: "Iceland", population: 382_003, independenceDay: "17-6.1944",
      isIsland: true, colorsInFlag:  ["blue", "white", "red"] },
  ]

  const countriesFiltered = countries.filter(country => {
    return (!country.isIsland || country.independenceDay === "old as heaven");
  })

  return (
    <div className="container">
      <h1>Nordics</h1>
      <div className="countries">
        {countries.map(country => {
          return <Country key={Math.random()} country={country} displayFlags={1} />
        })}
      </div>
      <div className="countries">
        {countriesFiltered.map(country => {
          return <Country key={Math.random()} country={country}  displayFlags={2} />
        })}
      </div>
    </div>
  )
}

export default App;