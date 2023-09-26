/* eslint-disable react/no-unescaped-entities */
import BlogItem from "components/blog-item/blogItem";
import { blogs } from "./blogs.data";

export default function Home() {
  return (
    <div className="w-auto md:w-[600px] py-10 px-5 md:px-0 mx-auto">
      <p className="text-xl my-5">
        Hello, I'm <span className="font-bold">Arjay</span>! I'm a software
        engineer, gamer, music lover, that also loves to hangout with friends.
        You can contact me on{" "}
        <a href="" className="text-blue-400 hover:text-blue-700">
          LinkedIn
        </a>
      </p>
      <h2 className="font-bold text-[27px] my-5">Blog</h2>
      <div>
        <BlogItem blogs={blogs} />
      </div>
    </div>
  );
}
