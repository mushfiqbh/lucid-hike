"use client";

import { useCPHikeContext } from "@/context/CPHikeContext";
import React from "react";

const Sidebar = () => {
  const { handles, setHandles } = useCPHikeContext();

  return (
    <div className="w-fit flex flex-col gap-5 m-5">
      <form>
        <div className="w-fit p-3 flex flex-col">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            value={handles.name}
            className="border-b-2 bg-slate-50 focus:outline-none p-2"
            onChange={(e) => setHandles({ ...handles, name: e.target.value })}
          />
        </div>
        <div className="w-fit p-3 flex flex-col">
          <label htmlFor="cf">Codeforces Handle</label>
          <input
            type="text"
            name="cf"
            value={handles.cf}
            className="border-b-2 bg-slate-50 focus:outline-none p-2"
            onChange={(e) => setHandles({ ...handles, cf: e.target.value })}
          />
        </div>
        <div className="w-fit p-3 flex flex-col">
          <label htmlFor="lc">Leetcode Handle</label>
          <input
            type="text"
            name="lc"
            value={handles.lc}
            className="border-b-2 bg-slate-50 focus:outline-none p-2"
            onChange={(e) => setHandles({ ...handles, lc: e.target.value })}
          />
        </div>
        <div className="w-fit p-3 flex flex-col">
          <label htmlFor="cc">Codechef Handle</label>
          <input
            type="text"
            name="cc"
            value={handles.cc}
            className="border-b-2 bg-slate-50 focus:outline-none p-2"
            onChange={(e) => setHandles({ ...handles, cc: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
