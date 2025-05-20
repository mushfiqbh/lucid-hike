import { ParamValue } from "next/dist/server/request/params";
import React from "react";

const Blog = ({ slug}: { slug?: ParamValue }) => {
  return <div>
    {slug}
  </div>;
};

export default Blog;
