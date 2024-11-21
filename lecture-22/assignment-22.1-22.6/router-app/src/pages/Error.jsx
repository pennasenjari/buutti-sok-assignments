import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
 
  if (error.status === 404) {
    return (
      <div className='ErrorPage'>
        <h1>404 - Not Found</h1>
        <p>The requested page is not here</p>
        <Link to={'/'}>Main Page</Link>
      </div>
    );
  } else if (error.status === 401) {
    return (
      <div className='ErrorPage'>
        <h1>404 - Not Found</h1>
        <p>The requested page is not here</p>
        <Link to={'/'}>Main Page</Link>
      </div>
    );
  }

  //console.error(error)
  return (
    <div className='ErrorPage'>
      <h1>An Unexpected error happened!</h1>
      <p>({error.status}) {error.statusText}</p>
      {error.data?.message && <p>{error.data.message}</p>}
    </div>
  )
}
