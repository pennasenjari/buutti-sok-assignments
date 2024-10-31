import Row from './Row.jsx';

const Wall = () => {

  const rowsArray = Array.from({ length: 10 });

  return (
    <div className="wall">
      {rowsArray.map((_, index) => (
        <Row key={index} />
      ))}
    </div>
  );
}

export default Wall;