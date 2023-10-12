import Ameba from "@/components/Ameba";
import PageTitle from "@/components/pageTitle";
import Top from "@/components/top";
import ProductionsList from "./productionsList";

export default function Production() {
  return (
    <>
      <Top />
      <PageTitle title="production" />
      <ProductionsList />
    </>
  );
}
