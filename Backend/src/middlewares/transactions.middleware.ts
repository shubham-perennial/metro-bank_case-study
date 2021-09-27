import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, callback) {
    callback(null, new Date().toISOString() + file.originalname);
  },
});

//   C:\Users\Perennial\Downloads\perennial\Training\Ts-Assignment\metro-bank_case-study\Backend\dist\uploads
console.log(path);
// const fileFilter = (file: any, callback: any) => {
//   if (file.mimetype === "csv" || file.mimetype === "csv") {
//     callback(null, true);
//   } else {
//     callback(null, false);
//   }
// };

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
//   fileFilter: fileFilter,
});

export default upload;
