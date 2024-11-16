import deleteIcon from './assets/deleteIcon.png';
import editIcon from './assets/editIcon.png';

const ContactList = ({contacts, viewContact, editContact, deleteContact, newContact, 
  filter, setFilter}) => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <div>
        <input type="text" value={filter} placeholder="search"
        onChange={(e) => setFilter(e.target.value)} />
        <img src={deleteIcon} className="deleteIcon" title="Remove Filter" 
        onClick={() => setFilter("")} />
        </div>
        {contacts.map((contact) => {
          return (
            <div className="contact" key={contact.id}>
              <span onClick={() => viewContact(contact)}>{contact.name}</span>
              <img src={editIcon} className="editIcon" onClick={() => editContact(contact)} />
              <img src={deleteIcon} className="deleteIcon" onClick={() => deleteContact(contact)} />
            </div>
          )
        })}
      <button onClick={() => newContact()}>Add Contact</button>
    </div>
  )
}

export default ContactList;