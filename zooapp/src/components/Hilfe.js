import React from 'react'
import TextBox from './TextBox'

export default function Hilfe() {
  return (
    <div>
      <h1>Hilfe</h1>
      <TextBox
      className="hilfe_seite"
      name="Wie kann ich Tickets für ZooZ kaufen?"
      description=""
      />
      <TextBox
      className="hilfe_seite"
      name="Welche Tiere kann ich im ZooZ sehen?"
      description="Unser Zoo hat eine breite Auswahl von Tieren aus der ganzen Welt. 
      Die beliebtesten Tiere sind Affen, Elefanten, Bären, Löwen, Tiger, Papageie, 
      Koala Bären; wir als Zoo bieten noch viel mehr. Wir haben uns nicht auf ein 
      Kontinent, Tiergattung, Klimazone usw. spezialisiert, sondern versuchen jedem 
      einen guten Einblick in die Tierwelt zu ermöglichen."
      />
      <TextBox
      className="hilfe_seite"
      name="Wie erreiche ich ZooZ?"
      description=""
      />
    </div>
  )
}
