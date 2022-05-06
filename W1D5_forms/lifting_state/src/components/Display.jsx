import React from 'react'

const Display = (props) => {
  return (
    <div>{JSON.stringify(props.users)}</div>
  )
}

export default Display