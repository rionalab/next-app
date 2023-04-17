import Link from 'next/link';

interface Props {
   params: { params: string[] };
}

async function getDetail(name: string) {
   const req = await fetch(`https://api.github.com/repos/rionalab/${name}`, {
      next: {
         revalidate: 10,
      },
   });
   // throw new Error('aaaaaaaaaaaaaaaaaaaaaaaa'); // force to show error componnet

   const res = await req.json();

   if (res.owner) return res;

   throw new Error(res.message);
}

const Page = async ({ params: { params } }: Props) => {
   const [id, name] = params;
   const detail = await getDetail(name);

   console.log(666666666666, detail);

   return (
      <div>
         <h3>
            Repo Detail [{id}] [{name}]
         </h3>
         <img src={detail.owner.avatar_url} />
         <br />
         <Link target="_blank" href={detail.svn_url}>
            Visit Repo
         </Link>
         {/* <p>{JSON.stringify(detail, null, '\t')}</p> */}
      </div>
   );
};

export default Page;
