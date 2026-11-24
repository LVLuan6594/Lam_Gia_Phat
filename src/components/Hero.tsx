import { company, heroHighlights, images } from '../data/company'

function HighlightIcon({ name }: { name: 'home' | 'document' | 'helmet' }) {
  if (name === 'home') {
    return <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m5 22 19-16 19 16M10 19v23h12V29h5v13h11V19M15 22h4m10 0h4" />
    </svg>
  }

  if (name === 'document') {
    return <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 5h17l10 10v28H12zM29 5v11h10M19 25h13M19 32h13" />
    </svg>
  }

  return <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M7 30a17 17 0 0 1 34 0v5H7zM13 30V19m11-6v17m11-11v11M7 35h34" />
  </svg>
}

export function Hero() {
  return (
    <section className="hero" id="trang-chu">
      <div className="wrap hero-wrap">
        <div className="hero-top">
          <div className="hero-copy">
            <p className="hero-brand">{company.name}</p>
            <h1>Kết nối <em>giá trị.</em><br />Dựng xây <em>tương lai.</em></h1>
            <p className="hero-categories">
              <span>Bất động sản</span><span>Thủ tục đất đai</span><span>Xây dựng</span>
            </p>
            <div className="actions hero-actions">
              <a className="button" href="#lien-he">Liên hệ tư vấn</a>
              <a className="button outline" href="#dich-vu">Khám phá dịch vụ</a>
            </div>
          </div>
          <div className="arch">
            <img src={images.hero} alt="Nhà ở trong ánh hoàng hôn" fetchPriority="high" />
          </div>
        </div>
        <div className="hero-highlights">
          {heroHighlights.map(({ icon, title, lines }) => (
            <article className="hero-highlight" key={title}>
              <HighlightIcon name={icon} />
              <div>
                <h2>{title}</h2>
                {lines.map(line => <p key={line}>{line}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
