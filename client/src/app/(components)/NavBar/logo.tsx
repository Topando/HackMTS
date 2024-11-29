import React from 'react'
import Image from "next/image"
import logo from "../../../../public/logo.svg"
type Props = {}

const LogoBar = (props: Props) => {
  return (
    <div className='flex w-30 h-30 float-left pl-7'>
    <Image
      priority
      src={logo}
      alt="Follow us on Twitter"
    />
  </div>

  )
}

export default LogoBar