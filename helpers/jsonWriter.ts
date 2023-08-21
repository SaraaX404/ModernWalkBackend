import { writeFile, readFileSync } from "fs";
import * as filePath from 'path'

export const fileWriter = (path: string, obj: any) => {
  writeFile(filePath.join(__dirname,path), JSON.stringify(obj), (err) => {
    if (err) throw err;
  });
};

export const fileReader = (path: string) => {
  const ReadData = readFileSync(filePath.join(__dirname,path), "utf8");
  const data = JSON.parse(ReadData)
  return data
};