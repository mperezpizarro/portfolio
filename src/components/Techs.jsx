import React from 'react'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiPhp } from 'react-icons/di/index'
import { SiTailwindcss, SiTypescript, SiVuedotjs, SiNuxtdotjs, SiNextdotjs } from 'react-icons/si/index'
import AstroIcon from './AstroIcon'
import './Techs.css'

const Techs = () => {
  return (
    <div className='tecnologias'>
        <DiHtml5 />
        <DiCss3 />
        <DiJsBadge />
        <SiTypescript />
        <DiReact />
        <SiNextdotjs />
        <AstroIcon />
        <SiTailwindcss />
        <SiVuedotjs />
        <SiNuxtdotjs />
        <DiPhp />
    </div>
  )
}

export default Techs
