import { db } from "./firebase";
import { User, BlogPost } from "@/types/global";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

export const getUsers = async (): Promise<User[]> => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => doc.data()) as User[];
};

const bolgsCollection = collection(db, "blogs");

export const getBlogsFS = async (): Promise<BlogPost[]> => {
  const blogs: BlogPost[] = [];

  try {
    const querySnapshot = await getDocs(bolgsCollection);

    querySnapshot.docs.forEach((doc) => {
      const blogData = doc.data();
      if (blogData) {
        blogs.push({ id: doc.id, ...blogData } as BlogPost);
      } else {
        console.warn(`Document with ID: ${doc.id} contains no data`);
      }
    });

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const addBlogFS = async (blog: BlogPost) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...rest } = blog;
    const blogWithTimestamp = {
      ...rest,
      createdAt: serverTimestamp(),
    };
    await addDoc(bolgsCollection, blogWithTimestamp);
    console.log("BlogPost added successfully");
  } catch (error) {
    console.error("Error adding blog: ", error);
  }
};

export const updateBlogFS = async (blog: BlogPost) => {
  try {
    const { id, ...rest } = blog;
    const blogRef = doc(bolgsCollection, id);
    await updateDoc(blogRef, {
      ...rest,
      updatedAt: serverTimestamp(),
    });
    console.log("BlogPost updated successfully");
  } catch (error) {
    console.error("Error updating blog: ", error);
  }
};

export const deleteBlogFS = async (blogId: string) => {
  try {
    const blogRef = doc(bolgsCollection, blogId);
    await deleteDoc(blogRef);
    console.log("BlogPost deleted successfully");
  } catch (error) {
    console.error("Error deleting blog: ", error);
  }
};
