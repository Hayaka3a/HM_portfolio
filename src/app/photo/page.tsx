import PageTitle from "@/components/pageTitle";
import TopLink from "@/components/topLink";
import styles from "@/app/styles/photo.module.css";
import Ameba from "@/components/Ameba";

export default function Photo() {
  return (
    <>
      <TopLink />
      <PageTitle title="photo" />
      <Ameba text={"coming soon"} />
    </>
  );
}
