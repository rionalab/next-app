interface Props {
  searchParams: any;
  params: {
    username: string;
  };
}

export default async function Page({ params, searchParams }: Props) {
  console.log(searchParams);

  return <div>Users {params.username}</div>;
}
