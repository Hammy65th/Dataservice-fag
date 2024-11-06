import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({p}) => {
  return (
    <div className="p-10 my-1 transition-all duration-700 border border-blue-500 shadow-md group hover:bg-tahiti-dark hover:scale-105 hover:shadow-slate-500">
      <p className="text-2xl group-hover:text-white text-tahiti-dark">{p.title}</p>

      <p className="p-4 my-3 border border-tahiti-dark group-hover:border-white">Post ID: {p.id}</p>

      <p className="">{p.body.slice(0,40)}...</p>
      <Link to={"/postsdetails/" + p.id } className="inline-block px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Læs Mere</Link>
    </div>
  );
};

export default PostCard;
