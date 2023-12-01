const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Đường dẫn đến thư mục dist
const distPath = path.join(__dirname, 'dist');

// Sử dụng middleware để phục vụ tệp tĩnh
app.use(express.static(distPath));

// Bắt đầu máy chủ
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});