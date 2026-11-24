import { images } from '../data/company'

type GalleryIconName = 'home' | 'document' | 'helmet'

function GalleryIcon({ name }: { name: GalleryIconName }) {
  if (name === 'home') {
    return <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m6 22 18-15 18 15M11 20v21h11V29h5v12h10V20" />
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

export function Gallery() {
  return (
    <section className="tint gallery-section" id="hinh-anh" data-scroll-reveal>
      <div className="wrap section">
        <h2 className="gallery-heading">
          <span className="gallery-heading-main">Một số công trình</span>
          {' '}
          <span className="gallery-heading-sub">
            <span>đã hoàn thiện bởi</span>
            <strong>Công ty Lâm Gia Phát</strong>
          </span>
        </h2>
        <div className="gallery-layout">
          <figure className="gallery-card gallery-feature">
            <img src={images.property} alt="Nhà phố cổ tại Việt Nam" loading="lazy" />
            <figcaption>
              <span className="gallery-icon gallery-icon-feature"><GalleryIcon name="home" /></span>
              <span>Nhà ở</span>
            </figcaption>
          </figure>

          <div className="gallery-side-stack">
            <figure className="gallery-card gallery-side-card">
              <img src={images.records} alt="Bản vẽ kiến trúc và hồ sơ công trình" loading="lazy" />
              <figcaption>
                <GalleryIcon name="document" />
                <span>Hồ sơ và bản vẽ</span>
              </figcaption>
            </figure>
            <figure className="gallery-card gallery-side-card">
              <img src={images.construction} alt="Nhà ở đang trong quá trình thi công" loading="lazy" />
              <figcaption>
                <GalleryIcon name="helmet" />
                <span>Thi công công trình</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
