import React from 'react'

function Transaction(props) {
  return (
    <div>
        <tr>
            <td>{props.date}</td>
            <td>{props.description}</td>
            <td>{props.category}</td>
            <td>{props.amount}</td>
        </tr>
    </div>
  )
}

export default Transaction