import Person from './Person.jsx';
import './Family.css';

const Family = ({surname, members}) => {
  return (
    <div className="family">
      <h2>{surname}'s</h2>
      {members.map((member) => {
        return <Person key={member.name} name={member.name} age={member.age} />
      })}
    </div>
  )
}

export default Family;