import profilePic from './assets/profile-picture.png';

const BusinessCard = () => {

  return (
    <div className="business-card">
      <img src={profilePic} alt="Profile Picture" className="profile-image" />
      <div className="card-details">
        <h1>Jari Pennanen</h1>
        <h2>Software Developer</h2>
        <p>Creating modern, efficient web solutions.</p>
        <div className="contact-info">
            <p>Phone: (123) 456-7890</p>
            <p>Email: <a href="mailto:jp@example.com">jp@example.com</a></p>
            <p>Website: <a href="https://example.com" target="_blank">example.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard;