# LHU Media AI — Trợ lý Giám định & Đánh giá Tiêu chuẩn Kỹ thuật Nội dung Số

Landing page giới thiệu **LHU Media AI** — nền tảng hỗ trợ tổ chức và quản lý cuộc thi sáng tạo số với tích hợp AI phân tích video, hướng đến 4 nhóm người dùng: Ban tổ chức, Ban giám khảo, Thí sinh và Cộng đồng.

## Tính năng

- **Quản lý cuộc thi** — Tạo thể lệ, mốc thời gian, tiêu chí chấm điểm và giải thưởng.
- **Đăng ký & nộp bài** — Cổng thông tin trực tuyến cho thí sinh đăng ký và tải video.
- **AI Video Analysis** — Nhận diện kỹ thuật quay, chuyển động camera và khung hình tự động.
- **Chấm điểm giám khảo** — Giao diện chấm điểm chuyên nghiệp tích hợp báo cáo tham khảo AI.
- **Tổng hợp điểm tự động** — Tính toán, xếp hạng và xuất báo cáo kết quả.
- **Bình chọn cộng đồng** — Môi trường tương tác, theo dõi và bình chọn tác phẩm.

## Công nghệ sử dụng

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## Yêu cầu

- Node.js 20.19+ hoặc 22.12+ (khuyến nghị LTS)
- npm (đi kèm Node.js)

## Cài đặt & chạy local

```bash
# Cài đặt dependencies
npm install

# Chạy môi trường phát triển (HMR)
npm run dev

# Build sản phẩm vào thư mục dist/
npm run build

# Preview bản build
npm run preview

# Kiểm tra lint
npm run lint
```

Mở trình duyệt theo URL hiển thị trong terminal (mặc định `http://localhost:5173`).

## Deploy lên Vercel

### Cách 1: Deploy qua Dashboard (không cần cài đặt)

1. Đẩy source code lên GitHub / GitLab.
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập.
3. Chọn **Add New → Project**, import repository chứa dự án.
4. Vercel tự động nhận diện framework **Vite** với cấu hình mặc định:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Nhấn **Deploy** và chờ quá trình hoàn tất.

### Cách 2: Deploy qua Vercel CLI

```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Deploy lên môi trường preview
vercel

# Deploy lên production (sau khi preview OK)
vercel --prod
```

### Cấu hình tùy chỉnh (tùy chọn)

Tạo file `vercel.json` tại thư mục gốc nếu cần cấu hình thêm:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

> Ghi chú: Các thư mục `node_modules` và `dist` đã được liệt kê trong `.gitignore`, Vercel sẽ tự build lại trên môi trường của nó nên không ảnh hưởng đến quá trình deploy.

## Cấu trúc thư mục

```
media-ai/
├── index.html              # Entry HTML
├── vite.config.js          # Cấu hình Vite
├── package.json
└── src/
    ├── main.jsx            # Điểm khởi chạy React
    ├── App.jsx             # Component gốc
    ├── assets/             # Hình ảnh & tài nguyên
    ├── components/
    │   ├── sections/       # Các section của landing page
    │   └── ui/             # Component UI dùng chung
    ├── data/               # Dữ liệu nội dung (features, solution, ...)
    └── styles/             # CSS global & variables
```