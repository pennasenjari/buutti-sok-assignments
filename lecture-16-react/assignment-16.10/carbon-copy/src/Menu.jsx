import buuttiLogo from './assets/Edu-Fix-harmaaOP.png';

const Header = () => {
  return (
    <div className="menuWrapper">
      <div className="menuLeft">
        <img src={buuttiLogo} />
      </div>
      <div className="menuRight">
        {/* Extra 1, Extra 2 */}
        <ul id="kitty-drop">
          <li>Training Programs
            <ul>
              <li><a href="https://buuttiedu.com/for-job-seekers/trainee-academy-2023-tampere/">Trainee Academy</a></li>
              <li><a href="https://buuttiedu.com/for-job-seekers/codematch-academy-2023/">Codematch Academy</a></li>
              <li><a href="https://buuttiedu.com/for-job-seekers/full-stack-training/">FullStack Training</a></li>
            </ul>
          </li>
          <li>For Businesses</li>
          <li>References</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;