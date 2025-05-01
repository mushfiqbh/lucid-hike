import { Dispatch, SetStateAction } from "react";
import { User } from "./types";

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
