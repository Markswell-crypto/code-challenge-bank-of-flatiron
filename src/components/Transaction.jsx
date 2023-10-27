import React from 'react'

function Transaction(props) {
  return (
    /* A table row (<tr>) representing a single transaction. */
    <tr>
        <td>{props.date}</td>
        <td>{props.description}</td>
        <td>{props.category}</td>
        <td>{props.amount}</td>    
    </tr>
  )
}

export default Transaction