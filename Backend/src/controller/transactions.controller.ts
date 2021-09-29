import { Response, Request, NextFunction } from "express";
import Transactions from "../model/transactions.model";
import CsvTransactions from "../model/uploadcsv.model";
import csvtojson from "../middlewares/fileParser.middleware";

const uploadTransaction = async (req: Request, res: Response) => {
  const transaction = await Transactions.create({
    file_csv: req.file?.path,
  });

  if (req.file?.path) {
    const path = await csvtojson(req.file?.path);
    console.log(path);
    const csvTransactions = await CsvTransactions.create(path);
    return res.status(201).send({ message: "file uploaded successfully" });
  } else {
    return res.status(404).send({ message: "Please upload the file" });
  }
};

const getTransactions = async (req: Request, res: Response) => {
  const csvtransaction = await CsvTransactions.find().lean().exec();
  return res.status(200).send({ data: csvtransaction });
};

export { uploadTransaction, getTransactions };
