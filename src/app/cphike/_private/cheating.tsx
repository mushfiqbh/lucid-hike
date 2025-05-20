"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import SubmissionTable from "@/components/Submission-Table";
import { Submission } from "@/types/global";
import { useCPHikeContext } from "@/context/CPHikeContext";

const API_URL = "https://codeforces.com/api/user.status";

const Cheating: React.FC = () => {
  const { handles } = useCPHikeContext();
  const [submissions, setSubmissions] = useState<Submission[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async () => {
    const trimmedHandle = handles.cf.trim();

    if (!trimmedHandle) {
      setError("Please enter a valid handle.");
      setSubmissions(null);
      return;
    }

    setError("");
    setLoading(true);
    setSubmissions(null);

    try {
      const res = await fetch(`${API_URL}?handle=${trimmedHandle}`);
      const data = await res.json();

      if (!res.ok || data.status !== "OK") {
        throw new Error("User not found");
      }

      const filtered =
        trimmedHandle === "mushfiqbh"
          ? data.result.filter((subm: Submission) => subm.contestId !== 2036)
          : data.result;

      setSubmissions(filtered);
    } catch {
      setError("User not found");
      setSubmissions(null);
    } finally {
      setLoading(false);
    }
  }, [handles.cf]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (handles.cf.trim()) fetchData();
    }, 500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [handles.cf, fetchData]);

  return (
    <div className="max-w-3xl p-6 bg-white">
      {loading && <div className="text-blue-500 mb-4">Loading...</div>}
      {error && !loading && <div className="text-red-500 mb-4">{error}</div>}
      {!error && submissions !== null && !loading && (
        <SubmissionTable
          title={`${
            handles.name ? handles.name : "Your Name"
          }'s Skipped Verdict Submissions`}
          submissions={submissions}
        />
      )}
    </div>
  );
};

export default Cheating;
