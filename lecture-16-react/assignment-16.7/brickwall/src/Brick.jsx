const Brick = ({ index }) => {
  return (
    <div className={index % 2 === 0 ? "brick" : "brick half-brick"}></div>
  )
}

export default Brick
