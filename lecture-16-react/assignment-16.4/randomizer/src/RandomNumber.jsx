const RandomNumber = () => {
  const nbr = Math.floor(Math.random() * 100) + 1;
  return (
    <div>The randomized number is: {nbr}</div>
  )
}

export default RandomNumber;