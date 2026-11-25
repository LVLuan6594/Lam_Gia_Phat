import { company, images } from '../data/company'

export function Cafe() {
  const photos = [
    { src: images.coffeeDrink, alt: 'Ly thức uống mang logo Lâm Gia Phát Coffee', caption: 'Thức uống của quán' },
    { src: images.coffeeMenu, alt: 'Bảng menu cà phê mang đi và điểm tâm sáng', caption: 'Cà phê & điểm tâm sáng' },
    { src: images.coffeeBrand, alt: 'Logo Lâm Gia Phát Coffee và menu đồ uống', caption: 'Menu đồ uống' },
    { src: images.coffeeExterior, alt: 'Mặt tiền quán Cà phê Lâm Gia Phát', caption: 'Mặt tiền quán' },
  ]

  return (
    <section id="ca-phe" className="cafe" data-scroll-reveal>
      <div className="wrap section">
        <div className="pairing cafe-intro">
          <img className="cafe-intro-image" src={images.coffee} alt="Không gian bên trong Cà phê Lâm Gia Phát" loading="lazy" />
          <div>
            <p className="eyebrow">Cà phê {company.name}</p>
            <h2>Cà phê &amp; <span className="cafe-heading-phrase">điểm tâm sáng</span></h2>
            <p className="cafe-description">Thưởng thức cà phê và điểm tâm sáng trong phòng lạnh.</p>
            <p>{company.office}</p>
            <a className="button light" href="#van-phong">Xem địa chỉ quán</a>
          </div>
        </div>
        <div className="cafe-photo-grid" aria-label="Hình ảnh thực tế Cà phê Lâm Gia Phát">
          {photos.map(({ src, alt, caption }) => (
            <figure className="cafe-photo-card" key={src}>
              <img src={src} alt={alt} loading="lazy" />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
