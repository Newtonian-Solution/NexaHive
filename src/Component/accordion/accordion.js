import React from 'react'
import { faqs } from '../../data'
import AccordionItem from './accordionItem'
import './style.scss'
const Accordion = () => {
  return (
      <ul className='accordion'>
          {faqs.map((faq, index) => (
              <AccordionItem key={index} faq={faq} />
          ))}
          
    </ul>
  )
}

export default Accordion