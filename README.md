# Chỉnh Sửa Ảnh - Bản phân phối (Electron + Pkg)

Mình đã chuẩn bị 2 bản:
- `electron-app/` : Ứng dụng Electron (mở cửa sổ riêng). Dùng `electron-builder` để tạo .exe
- `pkg-app/` : Ứng dụng đóng gói bằng `pkg` (mở trang web mặc định trên trình duyệt)

> Lưu ý: trong thư mục `*_app/frontend_build` mình để placeholder `index.html`. Bạn nên thay bằng **build frontend thực tế** (thư mục build từ dự án React/Vite của mình) — copy nội dung build vào `frontend_build` của mỗi app để có giao diện đầy đủ.

## Hướng dẫn nhanh (local) - Windows x64

### Electron (chạy dev)
1. Mở PowerShell trong `electron-app`
2. `npm install`
3. `npm start`  (mở ứng dụng Electron)

### Electron (build .exe sử dụng electron-builder)
1. Cài: `npm install --global electron-builder` (nếu muốn global)
2. Trong `electron-app`: `npm install` rồi `npm run build`
3. File .exe và installer sẽ nằm trong `electron-app/dist`

### Pkg (tạo exe đơn giản)
1. Vào thư mục `pkg-app`
2. `npm install`
3. `npm run build`  (cần cài `pkg` nên mình đã để trong devDependencies)
4. File `Chinh-Sua-Anh.exe` sẽ nằm trong `pkg-app/dist`

## Build tự động (GitHub Actions)
1. Tạo repository trên GitHub, push toàn bộ thư mục này lên branch `main`.
2. Vào tab Actions → chạy workflow **Build Windows executables** hoặc push sẽ tự chạy.
3. Sau khi chạy xong, vào workflow run và tải artifact `windows-build` (chứa `electron-app/dist` và `pkg-app/dist`).

## Thay icon
- Thay file `electron-app/assets/icon.ico` bằng file .ico bạn muốn (size 256x256 tốt nhất) trước khi build.

## Ghi chú
- Mình chưa chèn frontend build thực tế (dùng placeholder). Bạn cần copy folder `build` (kết quả `npm run build` của frontend) vào `electron-app/frontend_build` và `pkg-app/frontend_build`.
- Nếu bạn muốn, mình có thể: (A) chèn sẵn frontend build vào package trước khi tạo .zip; (B) tự chạy workflow trên GitHub để lấy .exe cho bạn — cần bạn cấp repo access hoặc push repo lên GitHub và cho mình biết.