import Brick from './Brick.jsx';

const Row = ({ brickCount }) => {
  const bricksArray = Array.from({ length: brickCount });

  return (
    <div className={brickCount % 2 === 0 ? "row full-row" : "row half-row"}>
      {bricksArray.map((_, index) => (
        <Brick key={index} index={index} />
      ))}
    </div>
  );
};

export default Row;