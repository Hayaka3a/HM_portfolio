import PageTitle from "@/components/pageTitle";
import TopLink from "@/components/topLink";
import ProductionsList from "./productionsList";
import PageTop from "@/components/pageTop";

export default function Production() {
  return (
    <>
      <TopLink />
      <PageTop />
      <PageTitle title="production" />
      <ProductionsList />
    </>
  );
}
