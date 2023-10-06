import { prisma } from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function contactAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("送信するよ");
    const contact = await prisma.contact.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment,
      },
    });

    return res.status(200).json(contact);
  } else {
    console.log("error!存在しないメソッドです。");
  }
}
