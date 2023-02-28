import React from 'react'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiPhp } from 'react-icons/di/index'
import { SiTailwindcss, SiTypescript, SiVuedotjs, SiNuxtdotjs, SiNextdotjs } from 'react-icons/si/index'
import AstroIcon from './AstroIcon'
import './Techs.css'

const Techs = () => {
  return (
    <div className='tecnologias'>
        <DiHtml5 title='HTML5' />
        <DiCss3 title='CSS3' />
        <DiJsBadge title='JavaScript' />
        <SiTypescript title='TypeScript' />
        <DiReact title='React' />
        <SiNextdotjs title='Next JS' />
        <AstroIcon title='Astro' />
        <SiTailwindcss title='Tailwind CSS' />
        <SiVuedotjs title='Vue' />
        <SiNuxtdotjs title='Nuxt' />
        <DiPhp title='PHP' />
    </div>
  )
}

export default Techs
