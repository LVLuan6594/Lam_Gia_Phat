import { services } from '../data/company'

export function Services() {
  return <section id="dich-vu" className="tint" data-scroll-reveal><div className="wrap section">
    <p className="eyebrow">Dịch vụ</p><h2>Giải pháp cho nhà đất và công trình</h2>
    <div className="cards">{services.map(([name, detail]) =>
      <article key={name}><h3>{name}</h3><p>{detail}</p></article>
    )}</div>
  </div></section>
}
