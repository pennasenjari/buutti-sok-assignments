import socialbuttons from './assets/social-buttons.png';
import gbFlag from './assets/gb.png';

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="headerLeft">
        <img src={socialbuttons} />
      </div>
      <div className="headerRight">
        <div className="headerLink">CodeMatch</div>
        <div className="headerLink">Consulting</div>
        <div className="headerLink">English</div>
        <img src={gbFlag} />
      </div>
    </div>
  )
}

export default Header;