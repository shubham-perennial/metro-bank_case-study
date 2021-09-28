import { Response, Request } from "express";
import Transactions from "../model/transactions.model";
import CsvTransactions from "../model/uploadcsv.model";
import parsedCsv from "../middlewares/fileParser.middleware";
import parseCsv from "../middlewares/fileParser.middleware";

const uploadTransaction = async (req: Request, res: Response) => {
  const csvObj = parseCsv()
  const transaction = await Transactions.create({
    file_csv: req.file?.path,
  });
  const csvTransactions = await CsvTransactions.create(csvObj);
  return res
    .status(201)
    .send({ data: transaction, message: "file is uploaded on mongo" });
};

const getTransactions = async (req: Request, res: Response) => {
  const csvtransaction = await CsvTransactions.find().lean().exec();
  return res.status(200).send({ data: csvtransaction });
};

export { uploadTransaction, getTransactions };
