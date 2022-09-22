import React from 'react'
import { DiHtml5, DiCss3, DiJsBadge, DiLinux, DiReact, DiSass, DiPhp } from 'react-icons/di/index'
import { SiSvelte } from 'react-icons/si/index'
import AstroIcon from './AstroIcon'
import './Techs.css'

const Techs = () => {
  return (
    <div className='tecnologias'>
        <DiHtml5 />
        <DiCss3 />
        <DiJsBadge />
        <DiLinux />
        <DiReact />
        <SiSvelte />
        <AstroIcon />
        <DiSass />
        <DiPhp />
    </div>
  )
}

export default Techs