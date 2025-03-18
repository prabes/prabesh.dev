"use client";
import Hero from "@/container/Hero";
import Stack from "@/container/Stack";
import Projects from "@/container/Projects";
import Blogs from "@/container/Blogs";

export default function Home() {
  return (
    <section className="sm:p-6  lg:p-12">
      <Hero />
      <Stack />
      {/* <Projects />
      <Blogs /> */}
    </section>
  );
}
