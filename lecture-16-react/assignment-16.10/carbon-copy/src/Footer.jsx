import koodia from './assets/koodia-suomesta-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <img src={koodia} /><br />
      <p>
        Buutti on osa Netum Group Oyj:tä<br />
        Teknologiantie 2 B6, 90590, Oulu<br />
        Mikonkatu 19B, 00100, Helsinki<br />
        Yliopistonkatu 58 B, 33100, Tampere<br />
        Y-tunnus: 2828574-9<br />
        Copyright 2024 © Buutti Oy<br />
      </p>
    </div>
  )
}

export default Footer;