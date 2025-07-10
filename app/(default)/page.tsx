export const metadata = {
  title: "Zuke - Get Started",
  description: "This is where the journey begins",
  icons: {
    icon: "/favicon.ico",
  },
};

import PageIllustration from "@/components/page-illustration";
import Workflows from "@/components/workflows";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Workflows />
    </>
  );
}
