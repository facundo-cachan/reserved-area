import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  console.log("hello GET");
  res.status(200).json({ message: "Hello from Next.js!" });
}
