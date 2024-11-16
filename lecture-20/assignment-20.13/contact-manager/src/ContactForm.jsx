const ContactForm = ({formFields, formData, handleFormChange, addContact, 
  updateContact, view, cancelEdit}) => {
return (
  <div className="contactForm">
    <h2>{view === "addContact" ? "Add" : "Edit"} Contact</h2>
    {formFields.map((field) => {
      return (
        <div className="contact" key={field.name}>
          <div className="contactLabel">
            {field.label}
          </div>
          <div>
            <input
              type="text" 
              name={field.name} 
              value={formData[field.name]}
              onChange={handleFormChange}>
            </input>
          </div>
        </div>
      )
    })}
    <button
      onClick={() => view === "addContact" ? addContact() : updateContact()}>Save
    </button>
    <button
      onClick={() => cancelEdit()}>Cancel
    </button>
  </div>
)}

export default ContactForm;