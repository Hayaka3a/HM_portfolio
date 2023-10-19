"use client";
import PageTitle from "@/components/pageTitle";
import TopLink from "@/components/topLink";
import PhotoList from "./photoList";
import PageTop from "@/components/pageTop";

export default function Photo() {
  return (
    <>
      <TopLink />
      <PageTop />
      <PageTitle title="photo" />
      <PhotoList />
    </>
  );
}
