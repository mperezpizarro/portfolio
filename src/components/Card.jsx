import React from 'react'
import { GitHub, ExternalLink } from 'react-feather'
import './Card.css'

const Card = ({title, children, github='', web='', place='', techs=''}) => {
  return (
    <div className='card'>
      <strong>{title}</strong>
      {children}
      <div className="links">
        {techs != '' && <strong>[{techs}]</strong>}
        {github != '' && <a href={github}><GitHub /></a>}
        {web != '' && <a href={web}><ExternalLink /></a>}
        {place != '' && <strong>{place}</strong>}
      </div>
    </div>
  )
}

export default Card