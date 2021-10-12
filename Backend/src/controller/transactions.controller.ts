import { Response, Request } from "express";
import Transactions from "../model/transactions.model";
import CsvTransactions from "../model/uploadcsv.model";
import csvtojson from "../middlewares/fileParser.middleware";
import Status from "../utility/statusCode";

const uploadTransaction = async (req: Request, res: Response) => {
  const transaction = await Transactions.create({
    file_csv: req.file?.path,
  });

  if (req.file?.path) {
    const csvObj = await csvtojson(req.file?.path);
    const csvTransactions = await CsvTransactions.bulkCreate(csvObj);
    return res
      .status(Status.Created)
      .send({ message: "file uploaded successfully" });
  } else {
    return res
      .status(Status.NotFound)
      .send({ message: "Please upload the file" });
  }
};

const getTransactions = async (req: Request, res: Response) => {
  let limit: number, page: number;
  req.query.limit ? (limit = Number(req.query.limit)) : (limit = 10);
  req.query.page ? (page = Number(req.query.page)) : (page = 1);
  const csvtransaction = await CsvTransactions.findAll({
    order: [["id", "ASC"]],
    limit: limit,
    offset: limit * page - limit,
  });
  return res.status(Status.Success).send({ data: csvtransaction });
};

export { uploadTransaction, getTransactions };
