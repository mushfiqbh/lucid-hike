"use client";

import React, { useEffect, useState } from "react";
import { useCPHikeContext } from "@/context/CPHikeContext";
import { LeetCodeUserProfile } from "@/types/global";

const LeetCodeProfileCard = () => {
  const { handles } = useCPHikeContext();
  const [data, setData] = useState<LeetCodeUserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      if (!handles?.lc) return;
      try {
        const res = await fetch(`/api/leetcode?handle=${handles.lc}`);
        const result: LeetCodeUserProfile = await res.json();
        if (result.username) {
          setData(result);
        }
      } catch {
        setError("Could not load LeetCode profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, [handles?.lc]);

  if (loading) return;
  if (error || !data)
    return <div className="p-4 text-red-500">{error || "No data found."}</div>;

  const { profile, submitStats } = data;
  const acStats = Object.fromEntries(
    submitStats.acSubmissionNum.map((s) => [s.difficulty, s])
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md border">
      <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-2">
        LeetCode: {profile.realName}
      </h2>
      <p className="text-sm text-center text-red-500 font-bold mb-4">{data.username}</p>

      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <strong>About:</strong> {profile.aboutMe}
        </p>
        <p>
          <strong>Company:</strong> {profile.company}
        </p>
        <p>
          <strong>School:</strong> {profile.school}
        </p>
        <p>
          <strong>Country:</strong> {profile.countryName}
        </p>
        <p>
          <strong>Ranking:</strong> #{profile.ranking.toLocaleString()}
        </p>
        <p>
          <strong>Reputation:</strong> {profile.reputation}
        </p>
        {profile.websites.length > 0 && (
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={profile.websites[0]}
              className="text-blue-600 underline"
              target="_blank"
            >
              {profile.websites[0]}
            </a>
          </p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Solved Problems</h3>
          <ul className="space-y-1">
            <li>🟢 Easy: {acStats.Easy?.count ?? 0}</li>
            <li>🟡 Medium: {acStats.Medium?.count ?? 0}</li>
            <li>🔴 Hard: {acStats.Hard?.count ?? 0}</li>
            <li>🧠 Total: {acStats.All?.count ?? 0}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeProfileCard;
