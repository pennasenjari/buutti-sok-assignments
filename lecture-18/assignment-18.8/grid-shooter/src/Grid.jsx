import './Grid.css';

const Grid = ({handleClick, randomIndex, isRunning}) => {

  const gridItems = Array.from({ length: 100 }, (_, index) => index);

  return (
    <div className={isRunning ? "grid-container" : "grid-container-hidden"}>
      {gridItems.map((item, index) => (
        <div key={item} className={index === randomIndex ? "grid-item red" : "grid-item"}
        onClick={handleClick}>
        </div>
      ))}
    </div>
  );
}

export default Grid;