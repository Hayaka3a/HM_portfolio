import { supabase } from "@/createClient";
import { production } from "@/type/production";

export default async function getProduction(url: string) {
  const { data, error } = await supabase
    .from("productions")
    .select()
    .eq("url", url)
    .order("created_at");

  if (error) {
    console.log(error.code, error.message);
  } else if (data) {
    return data[0] as production | undefined;
  } else {
    console.log("データが見つかりませんでした");
  }
}
