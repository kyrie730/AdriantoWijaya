import Projects from "@/components/Projects/Page";
import { PageTitle } from "@/shared/Constant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: PageTitle.Projects,
};

export default function Page() {
  return <Projects />;
}
