const Stats = ({stats}) => {
console.log(stats.words)
  return (
    <>
    <div>Characters: {stats.chars}</div>
    <div>Words: {stats.words}</div>
    <div>Sentences: {stats.sentences}</div>
    <div>Average Word Length: {stats.averageWordLength}</div>
    <div>Average Words per centence: {stats.averageWordsPerSentence}</div>
  </>
  )
}

export default Stats;