"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import style from "./style.module.css";

function NavLink({ href, children }: any) {
  let segment = useSelectedLayoutSegment();
  const isActive = `/${segment || ""}` === href;

  return (
    <>
      <Link className={style.link} href={href}>
        {isActive ? "." : ""}
        {children}
      </Link>
      &nbsp;&nbsp;&nbsp;
    </>
  );
}

export default NavLink;
