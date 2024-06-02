"use client";
import { Button } from "@/components/ui/button";
import { Section } from "lucide-react";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <Section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <Button className="text-white-1 bg-orange-1">Button</Button>
      </Section>
    </div>
  );
};

export default Home;
