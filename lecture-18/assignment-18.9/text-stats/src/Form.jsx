const Form = ({updateStats, text}) => {
  return (
    <>
      <textarea onChange={updateStats} value={text}/>
    </>
  )
}

export default Form;