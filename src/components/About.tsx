import { company } from '../data/company'

export function About() {
  const legalBrand = company.name.toUpperCase()
  const hasLegalBrandSuffix = company.legalName.endsWith(legalBrand)

  return <section id="gioi-thieu" className="wrap section about" data-scroll-reveal>
    <div><p className="eyebrow">Giới thiệu</p><h2>Đồng hành cùng<br />giá trị nhà đất</h2></div>
    <div>
      <p className="legal">
        {hasLegalBrandSuffix
          ? <>{company.legalName.slice(0, -legalBrand.length)}<span className="legal-brand">{legalBrand}</span></>
          : company.legalName}
      </p>
      <p className="about-description">Mua bán một căn nhà, chuẩn bị hồ sơ đất đai hay xây dựng văn phòng là những nhu cầu khác nhau. Tại Lâm Gia Phát, bạn có thể trao đổi từng việc với công ty, từ ký gửi nhà đất đến xin phép xây dựng, thi công và hoàn công.</p>
    </div>
  </section>
}
  