import { prisma } from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function contactAPI(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const contact = await prisma.contact.create({ data: req.body });

      console.log("リクエストメソッド:", req.method);
      console.log("挿入されたデータ:", contact);

      return res.status(200).json(contact);
    } else {
      return res.status(405).json({ message: "許可されていないメソッドです" });
    }
  } catch (error) {
    console.error("エラー:", error);
    return res.status(500).json({ message: "内部サーバーエラー" });
  }
}
