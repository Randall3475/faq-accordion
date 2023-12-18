import { useState } from 'react'
import { IconPlus, IconMinus } from '@/components/ui'

type AccordionProps = {
  id: string | number
  question: string
  answer: string
  open?: boolean
}

export default function Accordion({
  id,
  question,
  answer,
  open = false,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(open)
  return (
    <div>
      <div
        role='button'
        aria-expanded={accordionOpen}
        aria-controls={`accordion-content-${id}`}
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='group flex w-full cursor-pointer items-center justify-between gap-x-4 text-start'
      >
        <h2 className='text-lg font-semibold text-zinc-800 transition-colors group-hover:text-[#AD28EB]'>
          {question}
        </h2>
        {accordionOpen ? <IconMinus /> : <IconPlus />}
      </div>
      <p
        id={`accordion-content-${id}`}
        className={`text-sm font-normal leading-normal text-zinc-500 transition-all lg:text-base ${
          accordionOpen ? 'mt-6' : 'mt-0 h-0 overflow-hidden'
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
