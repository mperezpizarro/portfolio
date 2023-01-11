import React from 'react'
import { DiHtml5, DiCss3, DiJsBadge, DiLinux, DiReact, DiSass, DiPhp } from 'react-icons/di/index'
import { SiTailwindcss, SiTypescript, SiVuedotjs, SiNuxtdotjs } from 'react-icons/si/index'
import AstroIcon from './AstroIcon'
import './Techs.css'

const Techs = () => {
  return (
    <div className='tecnologias'>
        <DiHtml5 />
        <DiCss3 />
        <DiJsBadge />
        <SiTypescript />
        <DiLinux />
        <DiReact />
        <AstroIcon />
        <DiSass />
        <SiTailwindcss />
        <SiVuedotjs />
        <SiNuxtdotjs />
        <DiPhp />
    </div>
  )
}

export default Techs