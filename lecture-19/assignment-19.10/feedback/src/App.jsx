import './App.css';
import { useState } from 'react';

function App() {

  const emptyForm = {userName: "", email: "", feedbackType: "", text: ""};

  const [myForm, setMyForm] = useState(emptyForm)

  const handleSubmit = (e) => {

    // Prevent the form's default behaviour to avoid page reload
    e.preventDefault();

    // Using spread operator to selectively include properties in toSubmit
    const toSubmit = {
      "name": myForm.userName,
      "email": myForm.email,
      "feedbackType": myForm.feedbackType,
      "text": myForm.text
    };

    console.log(toSubmit);
  }

  const handleReset = () => {
    setMyForm(emptyForm);
  }

  return (
    <>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" value={myForm.userName} 
            onChange={(e) => setMyForm({...myForm, userName: e.target.value})} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={myForm.email} 
            onChange={(e) => setMyForm({...myForm, email: e.target.value})} />
        </div>
        <div className="radio">
          <label>Feedback
            <input type="radio" checked={myForm.feedbackType === "feedback"}
            onChange={() => setMyForm({...myForm, feedbackType: "feedback"})} />
          </label>
          <label>Suggestion
            <input type="radio" checked={myForm.feedbackType === "suggestion"}
            onChange={() => setMyForm({...myForm, feedbackType: "suggestion"})} />
          </label>
          <label>Question
            <input type="radio" checked={myForm.feedbackType === "question"}
            onChange={() => setMyForm({...myForm, feedbackType: "question"})} />
          </label>
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <textarea id="text" value={myForm.text}
            onChange={(e) => setMyForm({...myForm, text: e.target.value})} />
        </div>
        <div>
          {/* EXTRA: disable submit if no selections or text */}
          <button type="submit" disabled={!myForm.feedbackType || !myForm.text ?
            "disabled" : null}>Submit</button>
          <button type="reset" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </>
  )
}

export default App;