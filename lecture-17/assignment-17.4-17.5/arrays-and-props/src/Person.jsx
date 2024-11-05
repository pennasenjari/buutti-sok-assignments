import './Person.css'

const Person = ({name, age}) => {
  return (
    <div className="person">
      {name}, {age}
    </div>
  )
}

export default Person;