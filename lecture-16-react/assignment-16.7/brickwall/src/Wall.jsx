import Row from './Row.jsx';

const Wall = () => {

  const numRows = 10;

  return (
    <div className="brick-wall">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <Row key={rowIndex} brickCount={rowIndex % 2 === 0 ? 10 : 11} />
      ))}
    </div>
  );
};

export default Wall;