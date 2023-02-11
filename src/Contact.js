import React from 'react'

function Contact(props) {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  )
}

export default Contact
