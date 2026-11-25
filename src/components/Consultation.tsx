import { steps } from '../data/company'

export function Consultation() {
  return <section className="wrap section" data-scroll-reveal><h2>Bốn bước để bắt đầu tư vấn</h2>
    <ol className="steps">{steps.map(([name, text]) =>
      <li key={name}><h3>{name}</h3><p>{text}</p></li>
    )}</ol>
  </section>
}
