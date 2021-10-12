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
  try {
    const parseStream = parse();
    const data = await getStream.array(
      fs.createReadStream(filepath).pipe(parseStream)
    );
    return data;
  } catch (err) {
    return "data parsing failed with csv parser";
  }
};
export default parseCsv;
