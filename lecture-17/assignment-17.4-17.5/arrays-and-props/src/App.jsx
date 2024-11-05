import './App.css';
import Family from './Family.jsx';

function App() {

  const families = [
    {
      surname: 'Nielsen',
      members: [
        { name: 'Cedar', age: 2 },
        { name: 'Reef', age: 24 },
        { name: 'Dale', age: 29 },
      ]
    },
    {
      surname: 'Hardin',
      members: [
        { name: 'Sutton', age: 8 },
        { name: 'Greer', age: 14 },
        { name: 'Marley', age: 45 },
        { name: 'Rory', age: 47 },
      ]
    },
    {
      surname: 'Fowler',
      members: [
        { name: 'Hollis', age: 56 },
        { name: 'Blair', age: 9 },
      ]
    }
  ]

  return (
    <div className="families">
      <h1>Families</h1>
      {families.map((family) => {
        return <Family key={family.surname} surname={family.surname} members={family.members} />
      })}
    </div>
  )
}

export default App
