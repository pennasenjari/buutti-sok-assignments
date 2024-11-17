import './Grid.css';

const Grid = ({handleClick, indexRed, indexBlue}) => {

  const gridItems = Array.from({ length: 100 }, (_, index) => index);

  return (
    <div className="grid-container">
      {gridItems.map((item, index) => (
        <div 
          key={item}
          className={index === indexRed ? "grid-item red" 
          : index === indexBlue ? "grid-item blue" : "grid-item"}
          onContextMenu={(e) => e.preventDefault()} onMouseDown={(e) => handleClick(e)}>
        </div>
      ))}
    </div>
  );
}

export default Grid;