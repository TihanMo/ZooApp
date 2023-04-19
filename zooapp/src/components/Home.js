import React from 'react'
import '../App.css';
import TextBox from './TextBox';

export default function Home() {
  return (
    <div id="image_bg">
      <TextBox
        id="tb_1"
        name="Unsere Tiere"
        description="Wir bieten viele besondere Tiere für unsere Gäste an wie z.B.
          den Bengaltiger, den eurasischen Wolf, den asiatischen Elefanten und viele mehr!"
      />

      <TextBox
        id="tb_2"
        name="Wo sind wir?"
        description="Unser Zoo befindet sich auf der Arcosstrasse 1, Zürich. Jeder ist herzlich Wilkommen!"
      />

      <TextBox
        id="tb_3"
        name="Öffnungszeiten"
        description="Wir haben Montag bis Freitag von 8:00-21:00 offen und an Samstagen 9:00-18:00"
      />
    </div>
  )
}