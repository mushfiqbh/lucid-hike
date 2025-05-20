import React, { useMemo } from "react";
import { Submission } from "@/types/global";
import useDateDifferenceText from "@/hooks/useDateDifference";

interface Props {
  title: string;
  submissions: Submission[];
}

const SubmissionTable: React.FC<Props> = ({ title, submissions }) => {
  const skippedSubmissions = useMemo(
    () => submissions.filter((s) => s.verdict === "SKIPPED"),
    [submissions]
  );

  const differenceText = useDateDifferenceText(
    skippedSubmissions.length
      ? new Date(skippedSubmissions[0].creationTimeSeconds * 1000).getTime()
      : 0
  );

  if (!submissions.length) {
    return <div className="text-red-500 mb-4">No submissions found.</div>;
  }

  if (!skippedSubmissions.length) {
    return <div className="text-red-500 mb-4">No skipped verdicts found.</div>;
  }

  return (
    <div className="w-full overflow-scroll">
      <h2 className="m-3 ml-0 pl-3 border-l-2 border-slate-500">{title}</h2>
      <p className="m-3 ml-0 pl-3 border-l-2 border-red-500 text-sm text-red-500 font-bold">
        Last Cheated {differenceText} ago
      </p>
      <table className="w-full border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">No</th>
            <th className="p-2 border">Submission</th>
            <th className="p-2 border">Contest ID</th>
            <th className="p-2 border">Problem</th>
            <th className="p-2 border">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {skippedSubmissions.map((subm, index) => (
            <tr key={subm.id} className="hover:bg-gray-50">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border text-blue-600">
                <a
                  href={`https://codeforces.com/contest/${subm.contestId}/submission/${subm.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {subm.id}
                </a>
              </td>
              <td className="p-2 border text-blue-600">
                <a
                  href={`https://codeforces.com/contest/${subm.contestId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {subm.contestId}
                </a>
              </td>
              <td className="p-2 border text-blue-600">
                <a
                  href={`https://codeforces.com/contest/${subm.contestId}/problem/${subm.problem.index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {subm.problem.name}
                </a>
              </td>
              <td className="p-2 border">{subm.verdict}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
