import { Router } from "express";
import Transactions from "../controller/transactions.controller";
import upload from "../middlewares/transactions.middleware";

const router = Router();

router.post("/uploadfile", upload.single("file_csv"), Transactions);

export default router;
