import { apiBaseUrl } from '@/helpers/app';

async function getFriend(id: any) {
   const res = await fetch(`${apiBaseUrl}/friend/${id}`);
   return await res.json();
}

async function Page({ params }: any) {
   const friend = await getFriend(params.id);

   return (
      <div>
         detail friend of id {params.id}
         <br />
         {JSON.stringify(friend.data)}
      </div>
   );
}

export default Page;
