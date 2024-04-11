import React from 'react'

interface FooterProps {
    msg:string
}

const Footer = (props:FooterProps) => {
  return (
    <div>{props.msg}</div>
  )
}

export default Footer