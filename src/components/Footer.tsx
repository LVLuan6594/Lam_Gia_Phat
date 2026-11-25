import { company, headquartersMapEmbed, headquartersMapUrl, images, mapUrl } from '../data/company'

export function Footer() {
  return <footer id="lien-he" data-scroll-reveal>
    <div className="wrap footer-inner">
      <h2>Liên hệ {company.name}</h2>
      <div className="footer-grid">
        <div className="footer-map-column">
          <div className="footer-map" aria-label="Bản đồ trụ sở chính">
            <iframe
              src={headquartersMapEmbed}
              title="Bản đồ trụ sở chính Lâm Gia Phát"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <a className="footer-map-button" href={headquartersMapUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>Mở bản đồ trụ sở</span>
          </a>
        </div>

        <address className="footer-addresses">
          <div className="footer-location" id="tru-so">
            <svg className="location-icon" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M24 43V21m-9 6h18M15 27V14l9-7 9 7v13M18 17h12M18 21h12M18 33h4m4 0h4" />
            </svg>
            <div>
              <h3>Trụ sở chính</h3>
              <p>{company.headquarters}</p>
            </div>
          </div>
          <div className="footer-location" id="van-phong">
            <svg className="location-icon" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M10 42V14h16v28M26 42V8h12v34M6 42h36M15 20h6m-6 7h6m-6 7h6M31 15h3m-3 7h3m-3 7h3" />
            </svg>
            <div>
              <h3>Văn phòng đại diện</h3>
              <a href={mapUrl(company.office)} target="_blank" rel="noopener noreferrer">{company.office}</a>
            </div>
          </div>
        </address>

        <div className="footer-phone-card">
          <div className="footer-phone-heading">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path d="M15 7 8 10c-2 1-3 4-2 7 5 15 13 23 28 28 3 1 6 0 7-2l3-7-10-5-5 5c-7-3-11-7-14-14l5-5-5-10Z" />
              <path d="M28 10c6 1 10 5 11 11M27 17c3 1 5 3 6 6" />
            </svg>
            <h3>Di động / Zalo</h3>
          </div>
          <a href={'tel:' + company.phone.replace(/[.\s]/g, '')}>{company.phone}</a>
          <a href={'tel:' + company.phoneSecondary.replace(/[.\s]/g, '')}>{company.phoneSecondary}</a>
          <p>Gặp {company.contactName}</p>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-brand">
          <img src={images.logo} alt="" />
          <strong>{company.name}</strong>
        </div>
        <div className="footer-credits">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bản quyền thuộc về Công ty TNHH TM-DV Tư vấn BĐS &amp; Xây dựng{' '}
            <span className="footer-company-name">Lâm Gia Phát</span>.
          </p>
          <p className="footer-developer">
            Sản phẩm được phát triển bởi Dev -{' '}
            <a className="footer-developer-link" href="https://www.facebook.com/vuluan652024" target="_blank" rel="noopener noreferrer">
              Lê Vũ Luân
            </a>{' '}
            - <span className="footer-developer-phone">0366183317</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
}
