import React, { use } from "react";

interface Post {
  title: string;
  body: string;
}

async function getPost(id: string) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const res = await fetch(url);
  return await res.json();
}

export async function generateMetadata({ params }: any) {
  const { title } = await getPost(params.id);
  return { title };
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post: Post = use(getPost(id));

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export async function generateStaticParams() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();

  return posts.map((post: any) => ({ id: String(post.id) }));
}
