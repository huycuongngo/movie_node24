const express = require('express');
const userRoute = express.Router();
const {
  getUserType,
  getUserList,
  getUserListPagination,
  getUserById,
  logIn,
  signUp,
  getAccountInfo,
  getUserInfo,
  addUser,
  updateUserInfo,
  deleteUser
} = require('../controller/userController');


// GET
userRoute.get("/LayDanhSachLoaiNguoiDung", getUserType);
userRoute.get("/LayDanhSachNguoiDung", getUserList)
userRoute.get("/LayDanhSachNguoiDungPhanTrang", getUserListPagination)
userRoute.get("/TimKiemNguoiDung/:id", getUserById)

// POST
userRoute.post("/DangNhap", logIn)
userRoute.post("/DangKy", signUp)
userRoute.post("/ThongTinTaiKhoan", getAccountInfo)
userRoute.post("/LayThongTinNguoiDung", getUserInfo)
userRoute.post("/ThemNguoiDung", addUser)

// PUT
userRoute.put("/CapNhatThongTinNguoiDung", updateUserInfo)

// DELETE
userRoute.delete("/XoaNguoiDung", deleteUser)

module.exports = userRoute;
