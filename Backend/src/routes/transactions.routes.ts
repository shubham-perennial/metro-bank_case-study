import { Router } from "express";
import {
  uploadTransaction,
  getTransactions,
} from "../controller/transactions.controller";
import upload from "../middlewares/transactions.middleware";

const router = Router();

router.post("/uploadfile", upload.single("file_csv"), uploadTransaction);
router.get("/", getTransactions);

export default router;
