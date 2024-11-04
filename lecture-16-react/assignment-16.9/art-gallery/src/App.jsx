import './App.css'
import Art1 from './Art1.jsx'
import Art2 from './Art2.jsx'
import Art3 from './Art3.jsx'

function App() {

  return (
    <>
      <h1>Art Gallery</h1>
      <h2>Gallery 1</h2>
      <div className="gallery gallery1">
        <Art1 />
        <Art2 />
        <Art3 />
      </div>
      <h2>Gallery 2</h2>
      <div className="gallery gallery2">
        <Art1 />
        <Art2 />
      </div>
      <h2>Gallery 3</h2>{/* Extra 1 */}
      <div className="gallery gallery3">
        <Art1 />
        <Art2 />
        <Art3 />
      </div>
      <h2>Gallery 4</h2>{/* Extra 2 */}
      <div className="gallery gallery4">
        <Art1 />
        <Art2 />
        <Art3 />
      </div>
    </>
  )
}

export default App
