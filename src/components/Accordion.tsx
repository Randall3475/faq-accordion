import { useState } from 'react'
import { IconPlus, IconMinus } from './ui'

type AccordionProps = {
  question: string
  answer: string
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  return (
    <div>
      <summary
        aria-expanded={accordionOpen}
        aria-controls='accordion-content'
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='group flex cursor-pointer items-center justify-between'
      >
        <h2 className='text-lg font-semibold text-zinc-800 transition-colors group-hover:text-[#AD28EB]'>
          {question}
        </h2>
        {accordionOpen ? <IconMinus /> : <IconPlus />}
      </summary>
      <p
        id='accordion-content'
        className={`text-sm font-normal leading-normal text-zinc-500 transition-all lg:text-base ${
          accordionOpen ? 'mt-6' : 'mt-0 h-0 overflow-hidden'
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
