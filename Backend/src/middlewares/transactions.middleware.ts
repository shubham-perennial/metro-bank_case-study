export type Callback = (err: Error | null | boolean) => void; // why this ?

import multer from "multer";    
import path from "path";

const fileSize = (1024 * 1024 * 2)

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, callback) {
    callback(null, new Date().toISOString() + file.originalname); /// try with client id replace date
  },
});

// const fileFilter = (
//   req: Request,
//   file: Express.Multer.File,
//   callback: Callback
// ) => {
//   if (file.mimetype === "csv") {
//     callback(true);
//   } else {
//     callback(false);
//   }
// };

const upload = multer({
  storage: storage,
  limits: { fileSize: fileSize },
  // fileFilter: fileFilter,
});

export default upload;
