import React from 'react'

export default function Text_box(text_content) {
  return (
    <div>
      <h2>{text_content.name}</h2>
      <p>{text_content.description}</p>
    </div>
  )
}
