import React from 'react'

const BussinesCard = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.jobTitle}</h3>
        <h4>{props.company}</h4>
    </div>
  )
}

export default BussinesCard