const Instrument = ({name, image, price}) => {
  // const {name, image, price} = props; // Alternative style
  return (
    <div className="instrument">
      <div><h2>{name}</h2></div>
      <div><img src={image}></img></div>
      <div>Price: {price}</div>
    </div>
  )
}

export default Instrument
