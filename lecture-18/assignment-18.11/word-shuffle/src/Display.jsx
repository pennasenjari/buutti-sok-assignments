const Display = ({gameStatus, myWord, startGame}) => {
  return (
  <div className="display">
    {gameStatus === "running" || gameStatus === "finished" ?
      <input type="text" value={myWord} disabled="disabled" /> : null }
    {gameStatus === "finished" ? 
      <div><button onClick={startGame}>New game</button></div>: null} 
  </div>
)
}

export default Display;