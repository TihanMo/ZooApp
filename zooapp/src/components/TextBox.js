import React from 'react';
import '../App.css';

export default function TextBox(text_content) {
  return (
    <div className="text_box" id={text_content.id}>
      <h2>{text_content.name}</h2>
      <p>{text_content.description}</p>
    </div>
  )
}
