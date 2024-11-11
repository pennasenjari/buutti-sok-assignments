const Keyboard = ({shuffledWord, myWord, handleLetterClick}) => {

  const letters = shuffledWord.split("");
  const usedLetters = myWord.split("");

  const countLetters = (array, letter) => array.filter(item => item === letter).length;

  return (
    <div className="keyboard">
      {letters.map((letter, index) => {
        if (countLetters(usedLetters, letter) < countLetters(letters, letter)) {
          return <button key={index} value={letter} onClick={handleLetterClick}>{letter}</button>
        }
      })}
    </div>
  )
}

export default Keyboard;