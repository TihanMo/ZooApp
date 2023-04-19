import React from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { contact_name, contact_email, contact_message } = e.target.elements
    let conFom = {
      name: contact_name.value,
      email: contact_email.value,
      message: contact_message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Form</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="contact_name">
            Vor- und Nachname:
          </label>
          <br/>
          <input className="form-control" type="text" id="contact_name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="contact_email">
            Email:
          </label>
          <br/>
          <input className="form-control" type="email" id="contact_email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="contact_message">
            Ihre Nachricht:
          </label>
          <br/>
          <textarea className="form-control" id="contact_message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm