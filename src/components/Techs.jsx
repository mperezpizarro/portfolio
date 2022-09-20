import React from 'react'
import { DiHtml5, DiCss3, DiJsBadge, DiLinux, DiReact } from 'react-icons/di/index'
import { SiSvelte } from 'react-icons/si/index'
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
    </div>
  )
}

export default Techs