import { HomeCard } from "@/components/Home";
import { PageTitle } from "@/shared/Constant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: PageTitle.Home,
};

export default function Page() {
  return <HomeCard />;
}
