import { supabase } from "@/createClient";
import { production } from "@/type/production";
import { Dispatch, SetStateAction } from "react";

export default async function getAllProductions(
  setProductions: Dispatch<SetStateAction<production[] | undefined>>
) {
  const { data, error } = await supabase
    .from("productions")
    .select("id,url,image1,title")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.code, error.message);
  } else if (data) {
    const update = data as production[] | undefined;
    setProductions(update);
  } else {
    console.log("データが見つかりませんでした");
  }
}
