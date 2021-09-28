import csv from "csv-parser";
// const csv = require("csv-parser");
import fs from "fs";

interface buffer {
  Name: string;
  Salery: string;
  Company: string;
}
const result: buffer[] = [];

const parseCsv = () => {
  fs.createReadStream(
    "/home/mrcleveer/Downloads/Perennial_Training/metro bank/metro-bank_case-study/Backend/dist/uploads/2021-09-28T16:29:25.151Zdemo.csv"
  )
    .pipe(csv())
    .on("data", (chunk) => {
      result.push(chunk);
    })
    .on("end", () => {
      return result;
    }); //learn what does .on does and about end also;
  // return result;
};
export default parseCsv;
