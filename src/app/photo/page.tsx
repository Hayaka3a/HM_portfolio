import PageTitle from "@/components/pageTitle";
import Top from "@/components/top";
import styles from "@/app/styles/photo.module.css";
import Ameba from "@/components/Ameba";

export default function Photo() {
  return (
    <>
      <Top />
      <PageTitle title="photo" />
      <Ameba text={"coming soon"} />
    </>
  );
}
