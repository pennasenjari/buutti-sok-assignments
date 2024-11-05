import NameList from './NameList.jsx';
import './App.css';

function App() {

  const nameList = ["Ari", "Jari", "Kari", "Sari", "Mari", "Sakari", "Jouko"];

  return (
    <>
      <h1>Alternating List</h1>
      <NameList nameList={nameList} />
    </>
  )
}

export default App
