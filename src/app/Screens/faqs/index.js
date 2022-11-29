import React from 'react'
import Accordion from '../../../Component/accordion/accordion'
import './index.scss'

const Faqs = () => {
  return (
    <section className="faqs" id='faqs'>
      <div className="u-center-text margin-bottom-medium">
        <h1 className="faqs__heading">Faq</h1>
      </div>
      <Accordion />
    </section>
  );
}

export default Faqs