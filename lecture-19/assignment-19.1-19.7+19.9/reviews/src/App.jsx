import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';

function App() {

  const emptyForm = {userName: "", rating: "", title: "",
    review: "", reviewType: "", directorOrAuthor: "", reviewSelected: "", ratingSelected: ""};
  const [myForm, setMyForm] = useState(emptyForm);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {

    // Prevent the form's default behaviour to avoid page reload
    e.preventDefault();

    // Using spread operator to selectively include properties in toSubmit
    const toSubmit = {
      ...(myForm.userName && {"userName": myForm.userName}),
      ...(myForm.rating && {"rating": myForm.rating}),
      ...(myForm.title && {"title": myForm.title}),
      ...(myForm.review && {"review": myForm.review}),
      ...(myForm.reviewType && {"reviewType":myForm.reviewType}),
      ...(myForm.directorOrAuthor && {"directorOrAuthor": myForm.directorOrAuthor}),
      ...(myForm.reviewSelected && {"reviewSelected": myForm.reviewSelected}),
      ...(myForm.ratingSelected && {"ratingSelected": myForm.ratingSelected}),
    };

    setModalIsOpen(true);
    console.log(toSubmit);
  }

  const handleReset = () => {
    setMyForm(emptyForm);
  }

  Modal.setAppElement('#root');

  return (
    <div className="App">
      <h1>Inputs</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={myForm.userName} 
            onChange={(e) => setMyForm({...myForm, userName: e.target.value})} />
        </div>
        <div className="radio">
          <label>Movie Review
            <input type="radio" checked={myForm.reviewType === "movie"}
            onChange={() => setMyForm({...myForm, reviewType: "movie"})} />
          </label>
          <label>Book review
            <input type="radio" checked={myForm.reviewType === "book"}
            onChange={() => setMyForm({...myForm, reviewType: "book"})} />
          </label>
        </div>
        <div className={myForm.reviewType ? "visible" : "hidden"}>
          <div>
            <label>
              I want to write a review
              <input type='checkbox'
                checked={myForm.reviewSelected}
                onChange={() => setMyForm({...myForm, reviewSelected: !myForm.reviewSelected})} />
            </label>
            <label>
              I want to give a rating
              <input type='checkbox'
                checked={myForm.ratingSelected}
                onChange={() => setMyForm({...myForm, ratingSelected: !myForm.ratingSelected})} />
            </label>
          </div>
          <div className={myForm.ratingSelected ? "visible" : "hidden"}>
            <label>
            Rating:
            <input type='range'
              min='1'
              max='5'
              step='0.25'
              value={myForm.rating}
              onChange={(e) => setMyForm({...myForm, rating: e.target.value})} />
            </label>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={myForm.title}
              onChange={(e) => setMyForm({...myForm, title: e.target.value})} />
          </div>
          <div className={myForm.reviewSelected ? "visible" : "hidden"}>
            <label htmlFor="review">Review</label>
            <textarea id="review" value={myForm.review}
              onChange={(e) => setMyForm({...myForm, review: e.target.value})} />
          </div>
          <div>
            <label htmlFor="directorOrAuthor">{myForm.reviewType === "movie" ? 
              "Director" : "Author"}
            </label>
            <input type="text" name="directorOrAuthor" value={myForm.directorOrAuthor} 
              onChange={(e) => setMyForm({...myForm, directorOrAuthor: e.target.value})} />
          </div>
        </div>
        <div>
          {/* EXTRA */}
          <button type="submit" disabled={!myForm.reviewSelected && !myForm.ratingSelected ?
            "disabled" : null}>Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>

      <Modal isOpen={modalIsOpen} className="customModalContent"
      overlayClassName="customModalOverlay">
        <h1>{myForm.reviewType === "movie" ? "Moview Review" : "Book Review"}:<span> </span> 
          {myForm.title} by {myForm.directorOrAuthor}</h1>
        <div>{myForm.rating ? myForm.rating + " / 5": null}</div>
        <div>{myForm.review}</div>
        <div>Submitted by {myForm.userName}</div>
        <button onClick={() => setModalIsOpen(false)}>
          Close Modal
        </button>
      </Modal>
    </div>
  )
}

export default App;