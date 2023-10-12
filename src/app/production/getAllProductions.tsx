import { supabase } from "@/createClient";
import { production } from "@/type/production";

export default async function getAllProductions() {
  const { data, error } = await supabase
    .from("productions")
    .select("id,url,image1,title")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.code, error.message);
  } else if (data) {
    return data as production[] | undefined;
  } else {
    console.log("データが見つかりませんでした");
  }
}
