import { Response, Request } from "express";
import Transactions from "../model/transactions.model";
import CsvTransactions from "../model/uploadcsv.model";
import csvtojson from "../middlewares/fileParser.middleware";
import Status from "../utility/statusCode";

const uploadTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transactions.create({
      file_csv: req.file?.path,
    });

    if (req.file?.path) {
      let csvObj;
      try {
        csvObj = await csvtojson(req.file?.path);
      } catch (err) {
        return res
          .status(Status.RequestFailure)
          .json({ message: "promise rejected at csv parser" });
      }
      try {
        const csvTransactions = await CsvTransactions.bulkCreate(csvObj);
        return res
          .status(Status.Created)
          .send({ message: "file uploaded successfully" });
      } catch (err) {
        return res
          .status(Status.RequestFailure)
          .json({ message: "bulk data upload failed to sql" });
      }
    } else {
      return res
        .status(Status.NotFound)
        .send({ message: "Please upload the file" });
    }
  } catch (err) {
    return res
      .status(Status.RequestFailure)
      .json({ message: "file path upload failed" });
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
