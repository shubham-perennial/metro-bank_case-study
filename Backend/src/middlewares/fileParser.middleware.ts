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
  // .on("data", (chunk) => {
  //   result.push(chunk);
  // })
  // .on("end", () => {
  //   console.log("stream ran");
  // });
  // const objData = data.map((item: any) => result.push(item));
  return data;
  // console.log(data);
};
export default parseCsv;
