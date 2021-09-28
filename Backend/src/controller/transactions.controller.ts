import { Response, Request } from "express";
import Transactions from "../model/transactions.model";
import CsvTransactions from "../model/uploadcsv.model";
import csvObject from "../middlewares/fileParser.middleware";

const uploadTransaction = async (req: Request, res: Response) => {
  const transaction = await Transactions.create({
    file_csv: req.file?.path,
  });
  const csvTransactions = await CsvTransactions.create(csvObject);
  return res
    .status(201)
    .send({ data: transaction, message: "file is uploaded on mongo" });
};

const getTransactions = async (req: Request, res: Response) => {
  const csvtransaction = await CsvTransactions.find().lean().exec();
  return res.status(200).send({ data: csvtransaction });
};

export { uploadTransaction, getTransactions };
