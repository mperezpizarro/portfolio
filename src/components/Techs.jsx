import React from 'react'
import { DiHtml5, DiCss3, DiJsBadge, DiLinux, DiReact, DiSass, DiPhp, DiMysql } from 'react-icons/di/index'
import { SiSvelte, SiTailwindcss, SiTypescript } from 'react-icons/si/index'
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
        <SiSvelte />
        <AstroIcon />
        <DiSass />
        <SiTailwindcss />
        <DiPhp />
        <DiMysql />
    </div>
  )
}

export default Techs