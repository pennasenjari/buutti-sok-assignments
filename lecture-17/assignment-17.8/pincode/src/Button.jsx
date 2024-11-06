const Button = ({nbr, handler}) => {
  return (
    <button id={nbr} onClick={handler}>{nbr}</button  >
  )
}

export default Button;