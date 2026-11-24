# Lâm Gia Phát — landing page tiếng Việt

Dự án React + TypeScript + Vite. Môi trường kiểm thử: Node.js 24.22.3, npm 11.19.1.

## Mở trong VS Code

1. Giải nén toàn bộ ZIP. Trong VS Code, chọn File → Open Folder và mở thư mục chứa package.json.
2. Chọn Terminal → New Terminal. Chạy `npm ci` để cài đúng các phiên bản trong package-lock.json. Lần cài đầu cần Internet.
3. Chạy `npm run dev`, mở địa chỉ Local hiện trong Terminal. Giữ Terminal mở trong lúc sửa trang. Nhấn Ctrl+C khi muốn dừng.
4. Sửa tệp trong src/ rồi lưu. Vite tự cập nhật bản xem thử.

## Sửa nội dung và giao diện

| Cần chỉnh | Tệp / vị trí |
|---|---|
| Tên, trụ sở, văn phòng, điện thoại, email | src/data/company.ts → company |
| Danh sách và mô tả dịch vụ | src/data/company.ts → services |
| Menu, bốn bước, câu hỏi thường gặp | src/data/company.ts → navigation, steps, questions |
| Thay ảnh mở đầu | public/images/hero-nha-o.webp hoặc đổi images.hero trong src/data/company.ts |
| Tiêu đề, thông điệp và ba thẻ dịch vụ đầu trang | src/components/Hero.tsx và src/data/company.ts → heroHighlights |
| Logo, ảnh nhà ở, hồ sơ, xây dựng và bộ ảnh thực tế quán cà phê | public/images/ và IMAGE-SOURCES.md |
| Màu, cỡ chữ, khoảng cách, khung bo vòm và bố cục di động | src/styles/site.css |
| Thứ tự các phần | src/App.tsx |
| Nội dung và cách trình bày từng phần | src/components/ |
| Tiêu đề tab và mô tả kết quả tìm kiếm | index.html |

Chỉ điền phone và email khi doanh nghiệp xác nhận. Trang tự hiển thị liên kết gọi hoặc soạn thư khi có dữ liệu. Hai nút Maps tìm theo địa chỉ; có thể thay bằng liên kết địa điểm chính thức sau khi xác minh. Bản hiện tại không thu thập hoặc gửi thông tin khách hàng.

## Build và triển khai

Chạy `npm run build`. TypeScript kiểm tra kiểu dữ liệu trước khi Vite tạo thư mục dist/. Chạy `npm run preview` rồi mở địa chỉ được in trong Terminal để xem bản production qua HTTP.

Tải toàn bộ nội dung bên trong dist/ (index.html, assets/, images/) lên thư mục website của hosting tĩnh. Giữ nguyên cấu trúc. Sau mỗi lần sửa src/ hoặc public/, hãy build lại và triển khai bản dist/ mới. Khi chuyển dự án sang máy khác, giữ lại mã nguồn, package.json và package-lock.json rồi chạy lại npm ci.

## Tài liệu tham khảo thiết kế

PDF Lâm Gia Phát và bốn ảnh bảng hiệu là nguồn nhận diện và nội dung. Tham khảo cách phân nhóm dịch vụ ở [An Phong](https://www.anphong.vn/dich-vu) và cách dùng ảnh đại diện cho danh mục ở [Nhà Xinh](https://nhaxinh.com/). Ảnh minh họa của landing page được lưu trực tiếp trong dự án.
