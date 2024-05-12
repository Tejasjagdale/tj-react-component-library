import { FooterProps } from 'components/Types/Footer'
import React from 'react'

const Footer = (props: FooterProps) => {
  return (
    <>
      <div>{props.msg}</div>
      <p>footer</p>
    </>

  )
}

export default Footer