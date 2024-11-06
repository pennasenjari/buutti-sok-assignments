const Star = ({name, image, knownFor}) => {
  return (
    <div className="star">
      <h1>{name}</h1>
      <img src={image} />
      <p>Known for: 
        <ul>
        {knownFor.map((movie) => {
          return <li key={movie}>{movie}</li>
        })}
        </ul>
      </p>
    </div>
  )
}

export default Star;