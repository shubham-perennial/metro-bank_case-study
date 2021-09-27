import { Response, Request} from "express";
import Transactions from "../model/transactions.model";

const transactionFn = async (req: Request, res: Response) => {
    const transaction = await Transactions.create({
        file_csv: req.file?.path
    })
    return res.status(201).send({data: transaction});
}

export default transactionFn