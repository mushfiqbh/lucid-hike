import React from "react";
import Cheating from "./_private/cheating";
import Sidebar from "./_private/sidebar";
import Codechef from "./_private/codechef";
import LeetCodeProfileCard from "./_private/leetcode";

const page = () => {
  return (
    <div className="md:flex">
      <Sidebar />
      <Cheating />
      <LeetCodeProfileCard />
      <Codechef />
    </div>
  );
};

export default page;
