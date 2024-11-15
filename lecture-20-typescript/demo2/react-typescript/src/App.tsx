import './App.css'

interface PersonProps {
  firstname: string;
  lastname: string;
  age: number;
  handleClick: () => void;
}

function App() {

  return (
    <>
      <h1>React + TypeScript</h1>
      <Person handleClick={function(){console.log("OK")}} firstname={"Kalle"} lastname={"Ankka"} age={33} />
    </>
  )
}

const Person = (props: PersonProps) => {
  return <div>Moi {props.firstname} {props.lastname}, {props.age}</div>
}

export default App
