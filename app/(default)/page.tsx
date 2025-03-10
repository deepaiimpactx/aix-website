import Members from "@/components/members";

export const metadata = {
  title: "Home - DeepAI ImapctX",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Testimonials />
        <Members />
      <Cta />
    </>
  );
}
