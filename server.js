// server.js

// 1. Import thư viện express
import express from 'express';

// 2. Khởi tạo ứng dụng express
const app = express();

// 3. Xác định cổng hoạt động. Ưu tiên cổng từ môi trường (cho deployment) hoặc 3000 (cho local)
const PORT = process.env.PORT || 4100;

// 4. Tạo nội dung HTML cho trang bảo trì
const maintenanceHTML = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang web đang bảo trì</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #121212; /* Nền tối */
            color: #e0e0e0; /* Chữ sáng */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        .container {
            max-width: 600px;
            padding: 2rem;
            background-color: #1e1e1e; /* Nền container tối hơn một chút */
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        h1 {
            font-size: 2.5rem;
            color: #ff5252; /* Màu đỏ sáng hơn */
        }
        p {
            font-size: 1.1rem;
            line-height: 1.6;
        }
        .sad-icon {
            font-size: 5rem;
            color: #ffffff; /* Màu xám nhẹ */
            margin: 1.5rem 0;
            font-weight: 300;
            transform: rotate(90deg); /* Xoay icon 90 độ */
        }
        ul {
            list-style-type: none;
            padding: 0;
            margin-top: 1.5rem;
        }
        .links-container {
            display: flex;
            justify-content: center;
            gap: 2rem; /* Khoảng cách giữa 2 nút */
            flex-wrap: wrap; /* Cho phép xuống dòng trên màn hình nhỏ */
            margin-top: 1.5rem;
        }
        .link-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .link-item a {
            margin-bottom: 0.5rem; /* Khoảng cách giữa nút và label link */
        }
        a {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            min-width: 220px; /* Đảm bảo 2 nút có chiều rộng bằng nhau */
            box-sizing: border-box;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        a:hover {
            background-color: #0056b3;
        }
        .recommended {
            color: #4caf50; /* Màu xanh lá sáng hơn */
            font-weight: bold;
            font-size: 0.9rem;
            margin-left: 8px;
        }
        .link-label {
            font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
            font-size: 0.85rem;
            color: #d1c3c3; /* Màu xám sáng cho link */
            word-break: break-all; /* Ngăn link dài làm vỡ layout */
            padding: 0 1rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚧 Thông Báo Bảo Trì 🚧</h1>
        <p>
            Xin lỗi quý khách, trang web của chúng tôi đang trong quá trình bảo trì để nâng cấp hệ thống.
            Vui lòng quay lại sau.
        </p>
        <div class="sad-icon">:(</div>
        <p>
            Trong thời gian chờ đợi, bạn có thể truy cập các trang sau:
        </p>
        <div class="links-container">
            <div class="link-item">
                <a href="http://cam-chon.ddns.net" target="_blank" rel="noopener noreferrer">Trang Cấm Chọn (DDNS)</a>
               
                <div class="link-label">http://cam-chon.ddns.net</div>
                 <span class="recommended">(Khuyên dùng)</span>
            </div>
            <div class="link-item">
                <a href="https://banpick-v2.up.railway.app/" target="_blank" rel="noopener noreferrer">Trang Ban Pick V2 (Railway)</a>
                <div class="link-label">https://banpick-v2.up.railway.app/</div>
            </div>
        </div>
    </div>
</body>
</html>
`;

// 5. Định nghĩa route cho trang chủ
// Khi có người truy cập vào địa chỉ gốc ('/'), máy chủ sẽ gửi về nội dung HTML ở trên
app.use((req, res) => {
    res.status(503).send(maintenanceHTML); // 503 Service Unavailable là mã trạng thái phù hợp cho bảo trì
});

// 6. Khởi động máy chủ và lắng nghe ở cổng đã định nghĩa
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
