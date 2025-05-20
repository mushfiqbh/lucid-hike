"use client";

import { useCPHikeContext } from "@/context/CPHikeContext";
import { CodechefUserData } from "@/types/global";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Codechef = () => {
  const { handles } = useCPHikeContext();
  const [userData, setUserData] = useState<CodechefUserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/codechef?handle=${handles.cc}`);
      const data = await res.json();
      setUserData(data);
    };

    if (handles.cc) {
      fetchData();
    }
  }, [handles]);

  if (!userData?.success) return;

  return (
    <div className="max-w-sm mx-auto mt-6 p-4 border rounded-2xl shadow-md bg-white dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <Image
          src={userData.profile}
          alt={userData.name}
          className="rounded-full border"
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {userData.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {userData.stars}
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700 dark:text-gray-200">
        <p>
          <strong>Current Rating:</strong> {userData.currentRating}
        </p>
        <p>
          <strong>Highest Rating:</strong> {userData.highestRating}
        </p>
        <p className="flex items-center gap-1">
          <strong>Country:</strong>{" "}
          <Image
            src={userData.countryFlag}
            alt={userData.countryName}
            className="inline"
            width={20}
            height={16}
          />
          {userData.countryName}
        </p>
        <p>
          <strong>Global Rank:</strong> {userData.globalRank}
        </p>
        <p>
          <strong>Country Rank:</strong> {userData.countryRank}
        </p>
      </div>
    </div>
  );
};

export default Codechef;
