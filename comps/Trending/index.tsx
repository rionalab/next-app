import { use } from "react";
import style from "./style.module.css";

async function getTrending() {
  let res = await fetch("http://localhost:3000/api/trending");
  return await res.json();
}

function Trending() {
  let trending = use(getTrending());
  console.log(1111111111, trending);

  return (
    <div className={style.trending}>
      Trending
      {JSON.stringify(trending)}
    </div>
  );
}

export default Trending;
