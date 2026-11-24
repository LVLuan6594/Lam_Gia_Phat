import { useState } from 'react'
import { images, questions } from '../data/company'

const officeQuestion = 'Văn phòng đại diện nằm ở đâu?'

export function FAQ() {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(() => {
    const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 901px)').matches
    return isDesktop && questions[0] ? new Set([questions[0][0]]) : new Set()
  })

  const updateQuestion = (question: string, isOpen: boolean) => {
    setOpenQuestions(current => {
      if (current.has(question) === isOpen) return current

      const next = new Set(current)
      if (isOpen) next.add(question)
      else next.delete(question)
      return next
    })
  }

  return (
    <section
      className="faq-section"
      data-scroll-reveal
      onFocusCapture={event => event.currentTarget.classList.add('is-revealed')}
    >
      <div className="wrap section faq-layout">
        <div className="faq-content">
          <h2 className="faq-title">Câu hỏi thường gặp</h2>
          <div className="faq-list">
            {questions.map(([question, answer]) => (
              <details
                className="faq-item"
                key={question}
                open={openQuestions.has(question)}
                onToggle={event => updateQuestion(question, event.currentTarget.open)}
              >
                <summary><span>{question}</span></summary>
                <p className="faq-answer">
                  {answer}
                  {question === officeQuestion && <>
                    <br />
                    <a href="#van-phong">Xem địa chỉ văn phòng</a>
                  </>}
                </p>
              </details>
            ))}
          </div>
        </div>
        <figure className="faq-image">
          <img src={images.records} alt="Bàn tay xem bản vẽ nhà đất trên hồ sơ kiến trúc" loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
