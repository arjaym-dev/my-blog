import React from "react";
import Link from "next/link";

type Props = {
  blogs: {
    id: number;
    title: string;
    story: React.ReactElement;
    date: string;
  }[];
};

const formatTitle = (title: string) => {
  const formatTitle = title.toLowerCase().replaceAll(" ", "-");

  return formatTitle;
};
const BlogItem: React.FC<Props> = ({ blogs }) => {
  return (
    <React.Fragment>
      {blogs.map((props, index) => (
        <div key={index}>
          <Link
            className="block text-blue-400 text-xl mb-2"
            href={`/blog/${formatTitle(props.title)}`}
          >
            {props.title}
          </Link>
          <p className="text-lg text-slate-500">{props.date}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default BlogItem;
