import React from 'react'
import TextBox from './TextBox'
import ContactForm from './ContactForm'

export default function Hilfe() {
  return (
    <div className='hilfe_seite_main'>
      <div className="hilfe_seite_top">
      <h1 id='hilfe_h1'>Hilfe</h1>
      <TextBox
      className="hilfe_seite"
      id="htb_1"
      name="Wie kann ich Tickets für ZooZ kaufen?"
      description="Wir werden in der nahen Zukunft einen Online-Shop mit Tickets anbieten, 
      die es einfach machen wird für jeden Benutzer ein Online-Ticket zu kaufen. Doch zum 
      jetzigen Standpunkt, sollten sie beim Eingang des Zoos einen Ticketschalter sehen und 
      dort können sie ihr Ticket erwerben."
      />
      <TextBox
      className="hilfe_seite"
      id="htb_2"
      name="Welche Tiere kann ich im ZooZ sehen?"
      description="Unser Zoo hat eine breite Auswahl von Tieren aus der ganzen Welt. 
      Die beliebtesten Tiere sind Affen, Elefanten, Bären, Löwen, Tiger, Papageie, 
      Koala Bären; wir als Zoo bieten noch viel mehr. Wir haben uns nicht auf ein 
      Kontinent, Tiergattung, Klimazone usw. spezialisiert, sondern versuchen jedem 
      einen guten Einblick in die Tierwelt zu ermöglichen."
      />
      <TextBox
      id="htb_3"
      className="hilfe_seite"
      name="Wie erreiche ich ZooZ?"
      description="Sie können Google Maps für die effizienteste Route benutzen oder
      unsere integrierte Karten Seite benutzen"
      />
      </div>
      <div className='hilfe_seite_form'>
        <ContactForm />
      </div>
    </div>
  )
}
