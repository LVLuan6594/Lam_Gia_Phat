export const company = {
  name: 'Lâm Gia Phát',
  legalName: 'CTY TNHH TM-DV TƯ VẤN BĐS & XÂY DỰNG LÂM GIA PHÁT',
  phone: '0777.65.9999',
  phoneSecondary: '077.232.4444',
  contactName: 'Mr. Thanh Toàn',
  email: '',
  headquarters: '355 Hàng Xoài, Cái Răng, Cần Thơ, Vietnam',
  office: '32 đường Song Hành, KDC Hồng Loan 5C, P. Cái Răng, TP. Cần Thơ',
}

const imagePath = (name: string) => import.meta.env.BASE_URL + 'images/' + name

export const images = {
  logo: imagePath('logo-gia-phat.png'),
  hero: imagePath('hero-nha-o.webp'),
  property: imagePath('nha-o.webp'),
  records: imagePath('ho-so.webp'),
  construction: imagePath('thi-cong.webp'),
  coffee: imagePath('cafe.jpg'),
  coffeeDrink: imagePath('cafe1.jpg'),
  coffeeMenu: imagePath('cafe2.jpg'),
  coffeeBrand: imagePath('cafe3.jpg'),
  coffeeExterior: imagePath('VpDaiDien.jpg'),
}

export const navigation = [
  ['gioi-thieu', 'Giới thiệu'], ['dich-vu', 'Dịch vụ'],
  ['hinh-anh', 'Công trình'], ['ca-phe', 'Cà phê'], ['lien-he', 'Liên hệ'],
]

export const services = [
  ['Giao dịch nhà đất', 'Nhận ký gửi, mua bán và trao đổi nhà đất.'],
  ['Thủ tục đất đai', 'Nhận thực hiện các thủ tục đất đai theo nhu cầu của khách hàng.'],
  ['Giấy phép xây dựng', 'Nhận xin giấy phép xây dựng và các thủ tục liên quan.'],
  ['Hoàn công và hiện trạng', 'Nhận hoàn công nhà và vẽ hiện trạng nhà.'],
  ['Thi công xây dựng', 'Nhận thi công công trình, nhà ở và văn phòng.'],
  ['Hỗ trợ vay vốn', 'Hỗ trợ khách hàng có nhu cầu vay vốn ngân hàng.'],
  ['Định giá và cầm đồ', 'Nhận định giá ký gửi và nhận cầm đồ nhà, đất.'],
]

export const heroHighlights = [
  { icon: 'home', title: 'Giao dịch nhà đất', lines: ['Ký gửi, mua bán, trao đổi', 'Định giá ký gửi'] },
  { icon: 'document', title: 'Hồ sơ và thủ tục', lines: ['Thủ tục đất đai, giấy phép xây dựng', 'Hoàn công, vẽ hiện trạng'] },
  { icon: 'helmet', title: 'Thi công xây dựng', lines: ['Thi công công trình, nhà ở', 'Thi công văn phòng'] },
] as const

export const steps = [
  ['Xác định nhu cầu', 'Chọn việc bạn muốn trao đổi về nhà đất, hồ sơ hoặc công trình.'],
  ['Chuẩn bị thông tin', 'Tập hợp thông tin và những giấy tờ bạn đang có.'],
  ['Chọn địa điểm', 'Xem địa chỉ trụ sở hoặc văn phòng thuận tiện cho bạn.'],
  ['Trao đổi trực tiếp', 'Trình bày nhu cầu và cùng công ty làm rõ bước tiếp theo.'],
]

export const questions = [
  ['Tôi muốn ký gửi nhà đất, công ty có tiếp nhận không?', 'Có. Lâm Gia Phát nhận ký gửi, mua bán và trao đổi nhà đất.'],
  ['Công ty có nhận vẽ hiện trạng nhà không?', 'Có. Vẽ hiện trạng nhà và hoàn công nhà là các dịch vụ ghi trên bảng hiệu của công ty.'],
  ['Văn phòng đại diện nằm ở đâu?', company.office],
  ['Quán cà phê có phục vụ điểm tâm sáng không?', 'Có. Quán phục vụ cà phê và điểm tâm sáng trong phòng lạnh tại ' + company.office + '.'],
]

export function mapUrl(address: string) {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)
}

export const headquartersMapEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.216035447108!2d105.7482150760214!3d9.999005873049956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089ba4ceae0df%3A0x8c8c21190a65638e!2zMzU1IEjDoG5nIFhvw6BpLCBDw6FpIFLEg25nLCBD4bqnbiBUaMahLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1795504548289!5m2!1sen!2s'
export const headquartersMapUrl = mapUrl(company.headquarters)
