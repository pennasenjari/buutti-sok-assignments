const NumberForm = ({ number, addNumber }) => {
  return (
    <>
      <div>New number:</div>
      <input type="number" value={number} onChange={addNumber} />
    </>
  )
}

export default NumberForm;