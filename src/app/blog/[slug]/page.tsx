"use client";

import Blog from "@/components/blog";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { slug } = useParams();

  return (
    <main>
      <Blog slug={slug} />

      
    </main>
  );
};

export default Page;
