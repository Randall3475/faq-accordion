import { useState } from 'react'
import { IconPlus, IconMinus } from './ui'

type AccordionProps = {
  key: string | number
  question: string
  answer: string
}

export default function Accordion({ key, question, answer }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  return (
    <div>
      <button
        aria-expanded={accordionOpen}
        aria-controls={`accordion-content-${key}`}
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='group flex w-full cursor-pointer items-center justify-between gap-x-4 text-start'
      >
        <h2 className='text-lg font-semibold text-zinc-800 transition-colors group-hover:text-[#AD28EB]'>
          {question}
        </h2>
        {accordionOpen ? <IconMinus /> : <IconPlus />}
      </button>
      <p
        id={`accordion-content-${key}`}
        className={`text-sm font-normal leading-normal text-zinc-500 transition-all lg:text-base ${
          accordionOpen ? 'mt-6' : 'mt-0 h-0 overflow-hidden'
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
