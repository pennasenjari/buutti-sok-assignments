import { useLoaderData } from 'react-router-dom'
import { contacts } from '../contacts';

export function loader({params}) {
  const id = Number(params.id);
  const contact = contacts.find(contact => contact.id === id);
  if (contact === undefined) {
    const error = new Error('Contact not found');
    error.status = 401;
    throw error;
  }
  return contact;
}

const Contact = () => {
  const {id, name, phone, email} = useLoaderData();

  return (
    <div className='ContactsPage'>
      <div>
        <h2>{name}</h2>
      </div>
      <div >
        {phone}
      </div>
      <div >
        {email}
      </div>
    </div>
  );
}

export default Contact;