import { Inputs } from "@/type/inputs";
import { SubmitHandler } from "react-hook-form";

export const onSubmitForm: SubmitHandler<Inputs> = async (data) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      await response.json();
      window.location.reload();
    } else {
      console.error(response.status, "送信に失敗しました。");
    }
  } catch (error) {
    console.error("エラーが発生しました。", error);
  }
};
