interface Repository {
  id: number;
  name: string;
  full_name: string;
}

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  const url1 = "https://api.github.com/repos/vercel/next.js";
  const res = await fetch(url1);
  const data: Repository = await res.json();

  const opt1: any = {
    cache: `no-store`,
  };
  const opt2: any = {
    next: {
      revalidate: 5,
    },
  };
  // const urlTime = "http:///worldtimeapi.org/api/timezone/Asia/Jakarta";
  // const reqTime1 = await fetch(urlTime, opt1);
  // const time1 = await reqTime1.json();

  // const reqTime2 = await fetch(urlTime, opt2);
  // const time2 = await reqTime2.json();

  // const formatDate = (d: string) => {
  //   const date = new Date(d);
  //   return date.toLocaleTimeString();
  // };

  return (
    <div>
      <h1>Login {data.full_name}</h1>
      {/* <p>{formatDate(time1.datetime)}</p>
      <p>{formatDate(time2.datetime)}</p> */}
      {children}
    </div>
  );
}
