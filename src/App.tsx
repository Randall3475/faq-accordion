import React from 'react'
import Accordion from '@/components/Accordion'
import { faq } from '@/data'
export default function App() {
  return (
    <main className='absolute grid h-full w-full place-items-center p-4'>
      <section className='max-w-[600px] rounded-2xl bg-white p-10'>
        <div className='mb-8 flex items-center gap-x-6'>
          <img src='/assets/images/icon-star.svg' alt='Purple star icon' />
          <h1 className='text-[32px] font-bold text-dark-purple lg:text-[56px]'>
            FAQs
          </h1>
        </div>
        <div>
          {faq.map((faq, index) => {
            const isLast = Object.values(faq).length === index
            return (
              <React.Fragment key={faq.id}>
                <Accordion
                  open={index === 0 && true}
                  id={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                />
                {!isLast && <hr className='my-6' />}
              </React.Fragment>
            )
          })}
        </div>
      </section>
    </main>
  )
}
