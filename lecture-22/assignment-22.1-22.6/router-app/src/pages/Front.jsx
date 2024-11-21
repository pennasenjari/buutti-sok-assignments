import { Link, Outlet } from 'react-router-dom'

const FrontPage = () => {
  return (
    <div className='FrontPage'>
      <Link to={'/'}><h1>Contacts</h1></Link>
      <nav>
        <Link to={'/contact/0'}>Contact 1</Link> |&nbsp; 
        <Link to={'/contact/1'}>Contact 2</Link> |&nbsp;
        <Link to={'/contact/2'}>Contact 3</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default FrontPage;