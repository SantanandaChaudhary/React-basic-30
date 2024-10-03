import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  )
}
Button.defaultProps={
  name : "default"
}

Button.propTypes ={
  name:PropTypes.string
}
export default Button
