import './App.css';
import { useState } from 'react';

function App() {

  const isNotValidText = "This is not a valid email address";
  const isValidText = "This is a valid email address";

  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  const validateEmail = (event) => {

    const email = event.target.value;
    setIsValid(false); // default: not valid
    setMessage(isNotValidText);
    
    if (!email || email.length < 1) {
      // Empty field = valid
      setIsValid(true);
      setMessage("");
    } else if (email.indexOf("@") > 0 && email.indexOf("@") === email.lastIndexOf("@")) {
      // Email has exactly one @-sign. Can be split to name part and domain part.
      const emailParts = email.split("@");
      // get name part into characters array
      const user = emailParts[0].split("");
      // get domain part into characters array
      const domain = emailParts[1].split("");
      // Check the name part: first and last character cannot be whitespace or dot
      if (user.length > 1 && user[0] !== " " && user[0] !== "."
      && user[(user.length - 1)] !== " " && user[(user.length - 1)] !== ".") {
        // Check the domain part: first and last character cannot be whitespace or dot.
        // Domain has to contain at least one dot.
        if (domain.length > 1 && domain[0] !== " " && domain[0] !== "." 
        && domain[(domain.length - 1)] !== " " && domain[(domain.length - 1)] !== "."
        && domain.indexOf(".") > 0) {
          // check that there are at least 2 chars before and after last dot
          const beforeDot = domain.slice(0, domain.lastIndexOf("."));
          const afterDot = domain.slice(domain.lastIndexOf(".") + 1); // +1 to skip the dot
          if (beforeDot.length >= 2 && afterDot.length >= 2) {
            setIsValid(true);
            setMessage(isValidText);
          }
        }
      }
    }
  }

  return (
    <>
      <h1>Email Validator</h1>
      <input type="text" onChange={validateEmail} className={isValid ? "valid" : "invalid"}/>
      <div>{message}</div>
    </>
  )
}

export default App;