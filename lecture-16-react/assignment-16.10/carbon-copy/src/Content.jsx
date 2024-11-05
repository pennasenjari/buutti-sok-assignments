import team from './assets/MG_2536-2-1024x576.jpg';
import lassi from './assets/lassiop-1024x576.jpg';

const Content = () => {
  return (
    <div className="content">
      <h1><strong>ICT Training and recruitment</strong></h1>
      <div className="images">
        <div className="imageAndButton">
          <img id="team" src={team} />
          <button>Training Programs</button>
        </div>
        <div className="imageAndButton">
          <img id="lassi" src={lassi} />
          <button>For Employers</button>
        </div>
      </div>
    </div>
  )
}

export default Content;