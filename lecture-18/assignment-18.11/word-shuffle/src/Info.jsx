const Info = ({startGame, gameStatus, isCorrect, randomWord}) => {
  return (
    <div className="info">
      {gameStatus === "new" ? 
        <div><h2>Welcome to the shuffle game!</h2>
        <button onClick={startGame}>Start game</button></div> 
      : null} 
      {gameStatus === "finished" ? isCorrect ? <div>Correct!</div> 
      : <div>Fail. Correct answer was {randomWord}.</div> : null}
    </div>
  )
}

export default Info;