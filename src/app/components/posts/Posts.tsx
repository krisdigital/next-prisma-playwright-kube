"use client";

import { Prisma, Post } from "@prisma/client";
import React, { useEffect, useRef } from "react";
import { PostFormType } from "./types";
import NewPostForm from "./NewPostForm";

type PostsType = {
  initialPosts: Prisma.PostGetPayload<undefined>[];
  onSubmit: (params: PostFormType) => Promise<void>;
};

const Posts: React.FC<PostsType> = ({ initialPosts, onSubmit }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const PostRow: React.FC<{ p: Post }> = ({ p }) => (
    <div className="mb-2">
    <div className="px-2 py-0.5 border-1 border-blue-400 rounded-sm bg-blue-100">
      <h2 className="font-extrabold text-lg">{p.title}</h2>
      <p>{p.content}</p>
    </div>
    <p className="text-sm text-right">{p.createdAt.toLocaleString()}</p>
    </div>
  );

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scroll({ top: scrollContainerRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [initialPosts])

  return (
    <div className="flex flex-col h-screen p-2">
      <div ref={scrollContainerRef} className="overflow-scroll">
        {initialPosts.map((p) => (
          <PostRow key={p.id} p={p} />
        ))}
      </div>
      <NewPostForm
        onSubmit={async (p) => {
          await onSubmit(p);
        }}
      />
    </div>
  );
};

export default Posts;
