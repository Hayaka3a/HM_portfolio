import { supabase } from "../../createClient.js";
export const onSubmitForm = async (data: any) => {
  const { error } = await supabase.from("contacts").insert(data);
  if (error) {
    console.log(error.code, error.message);
  } else {
    console.log("送信成功");
    window.location.reload();
  }
};
