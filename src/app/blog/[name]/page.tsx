/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { blogs } from "app/blogs.data";

type Post = {
  id: number | string;
  title: string;
  story: React.ReactElement;
  date: string;
};

const formatTitle = (title: string) => {
  const formatTitle = title.toLowerCase().replaceAll(" ", "-");

  return formatTitle;
};

const Blog = (props: any) => {
  const router = useRouter();
  const { name } = props.params;

  const [post, setPost] = useState<Post | null>(null);

  const blog = blogs.filter((a) => formatTitle(a.title) == name);

  useEffect(() => {
    if (blog.length == 0) {
      router.push("/");
    } else {
      setPost(blog[0]);
    }
  }, []);

  return (
    <div className="w-auto md:w-[600px] py-10 px-5 md:px-0 mx-auto">
      <h2 className="font-bold text-4xl my-4">{post?.title}</h2>
      <p className="text-slate-500">{post?.date}</p>
      <div>{post?.story}</div>
    </div>
  );
};

export default Blog;
