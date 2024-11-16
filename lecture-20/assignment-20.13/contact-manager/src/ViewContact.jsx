import deleteIcon from './assets/deleteIcon.png';
import editIcon from './assets/editIcon.png';

const Contact = ({ formFields, contact, editContact, deleteContact }) => {
  return (
    <div className="showContact">
      <h2>{contact.name}</h2>
      {formFields.map((field) => {
        return (
          contact[field.name] &&
          <div className="contact" key={field.name}>
            <div className="contactLabel">{field.label}</div>
            <div className="contactText">{contact[field.name]}</div>
          </div>
        )
      })}
      <img src={editIcon} className="editIcon" onClick={() => editContact(contact)} />
      <img src={deleteIcon} className="deleteIcon" onClick={() => deleteContact(contact)} />
    </div>
  )
}

export default Contact;