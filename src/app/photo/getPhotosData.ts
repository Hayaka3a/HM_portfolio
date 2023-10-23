import { supabase } from "@/createClient";
import { photo } from "@/type/photo";
import { Dispatch, SetStateAction } from "react";

export default async function getPhotosData(
  setPhotos: Dispatch<SetStateAction<photo[] | undefined>>
) {
  const { data, error } = await supabase
    .from("photos")
    .select()
    .order("created_at");

  if (error) {
    console.log(error.code, error.message);
  } else if (data) {
    const update = data as photo[] | undefined;
    setPhotos(update);
  } else {
    console.log("データが見つかりませんでした");
  }
}
