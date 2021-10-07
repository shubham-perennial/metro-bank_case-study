import { Response, Request } from "express";
import Transactions from "../model/transactions.model";
import CsvTransactions from "../model/uploadcsv.model";
import csvtojson from "../middlewares/fileParser.middleware";
import Status from "../utility/statusCode"

const uploadTransaction = async (req: Request, res: Response) => {
  const transaction = await Transactions.create({
    file_csv: req.file?.path,
  });

  if (req.file?.path) {
    const csvObj = await csvtojson(req.file?.path);
    const csvTransactions = await CsvTransactions.bulkCreate(csvObj);
    return res.status(Status.Created).send({ message: "file uploaded successfully" });
  } else {
    return res.status(Status.NotFound).send({ message: "Please upload the file" });
  }
};

const getTransactions = async (req: Request, res: Response) => {
  const limit: number = Number(req.query.limit);
  const page: number = Number(req.query.page);
  const csvtransaction = await CsvTransactions.findAll({
    order: [["id", "DESC"]],
    limit: limit,
    offset: limit * page - limit,
  });
  return res.status(Status.Success).send({ data: csvtransaction });
};

export { uploadTransaction, getTransactions };
