import React from 'react'
import { GitHub, ExternalLink } from 'react-feather'
import './Card.css'

const Card = ({title, children, github='', web='', place='', techs=''}) => {
  return (
    <div className='card'>
      <strong>{title}</strong>
      {children}
      <div className="links">
        {place != '' && <strong>{place}</strong>}
        {techs != '' && <strong>[{techs}]</strong>}
        {github != '' && <a href={github} target='_blank'><GitHub /></a>}
        {web != '' && <a href={web} target='_blank'><ExternalLink /></a>}
      </div>
    </div>
  )
}

export default Card