import Brick from './Brick.jsx';

const Row = () => {

  const bricksArray = Array.from({ length: 10 });

  return (
    <div className="row">
      {bricksArray.map((_, index) => (
        <Brick key={index} />
      ))}
    </div>
  );
}

export default Row
