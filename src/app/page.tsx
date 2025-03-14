import React from "react";
import prisma from "./client";
import Posts from "./components/posts/Posts";
import { PostFormType } from "./components/posts/types";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function Home() {
  async function getPosts() {
    return await prisma.post.findMany();
  }

  async function createPost({ title, content, notes }: PostFormType) {
    "use server";
    let user = await prisma.user.findFirst();
    if (!user) {
      user = await prisma.user.create({ data: { email: 'klaus@klaus.de', name: 'Klaus' } });
    }
    await prisma.post.create({ data: { title, content, authorId: user.id, notes } });
    revalidatePath("/");
  }

  const posts = await getPosts();

  return (
    <div className="container">
      <Posts onSubmit={createPost} initialPosts={posts} />
    </div>
  );
}
