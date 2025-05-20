import { Dispatch, SetStateAction } from "react";
import { User } from "./types";

export interface Handles {
  name: string;
  cf: string;
  lc: string;
  cc: string;
  hr: string;
}

export interface CPHikeContextState {
  handles: Handles;
  setHandles: Dispatch<SetStateAction<Handles>>;
}

export interface AuthContextState {
  authUser: User | null;
  setAuthUser: Dispatch<SetStateAction<User | null>>;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  logout: () => Promise<void>;
}

export interface User {
  id: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: "follower" | "author" | "admin";
  handles?: {
    cf: string;
  };
  phoneNumber?: string;
  wishlist?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  summary: string;
  content: string;
  tags: string[];
  imageUrl?: string;
  readingTime: string;
  category?: string;
  isDraft?: boolean;
  upvotes?: string[];
  downvotes?: string[];
  commentIds?: string[];
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  parentId?: string;
  isDeleted?: boolean;
}

export interface Problem {
  name: string;
  index: string;
}

export interface Submission {
  id: number;
  contestId: number;
  verdict: string;
  problem: Problem;
  creationTimeSeconds: number;
}

interface CodechefUserData {
  success: boolean;
  status: number;
  profile: string;
  name: string;
  currentRating: number;
  highestRating: number;
  countryFlag: string;
  countryName: string;
  globalRank: number;
  countryRank: number;
  stars: string;
}

interface LeetCodeUserProfile {
  username: string;
  profile: {
    realName: string;
    websites: string[];
    countryName: string;
    company: string;
    school: string;
    aboutMe: string;
    reputation: number;
    ranking: number;
  };
  submitStats: {
    acSubmissionNum: SubmissionStats[];
    totalSubmissionNum: SubmissionStats[];
  };
}

interface SubmissionStats {
  difficulty: "All" | "Easy" | "Medium" | "Hard";
  count: number;
  submissions: number;
}
