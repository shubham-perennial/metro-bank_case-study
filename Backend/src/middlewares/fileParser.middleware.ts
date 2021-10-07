import parse from "csv-parser";
import fs from "fs";
import getStream from "get-stream";

interface buffer {
  Name: string;
  Salery: string;
  Company: string;
}
const result: buffer[] = [];

const parseCsv = async (filepath: string): Promise<any> => {
  const parseStream = parse();
  const data = await getStream.array(
    fs.createReadStream(filepath).pipe(parseStream)
  );
  return data;
};
export default parseCsv;
