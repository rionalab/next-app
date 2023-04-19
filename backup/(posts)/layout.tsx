import Link from "next/link";
import { use } from "react";
import style from "./style.module.css";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const metadata = {
  title: `Posts`,
};

async function getPosts() {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const res = await fetch(url);

  return await res.json();
}

function Layout({ children }: { children: React.ReactNode }) {
  const posts: Posts[] = use(getPosts());

  const titleSlug = (title: string) => {
    return title.replaceAll(" ", "-");
  };

  return (
    <div className={style.posts}>
      <div className={style.sidebar}>
        <ol>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link
                  className={style.link}
                  href={`/posts/${post.id}/${titleSlug(post.title)}`}
                >
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
