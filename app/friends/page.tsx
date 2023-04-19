import FriendList from '@/comps/friend/FriendList';
import { apiBaseUrl } from '@/helpers/app';
import { handleGet } from '@/helpers/request';
import * as model_friend from '@/lib/prisma/friend.prisma';
import { PrismaResponse } from '@/types/api';
import { FriendsAPI } from '@/types/friend';
import { Prisma } from '@prisma/client';
import useSWR from 'swr';

export const metadata = {
   title: `friends`,
};

async function getFriends() {
   const url = `${apiBaseUrl}/friend`;
   const res = await fetch(url);
   return await res.json();
}

async function Page() {
   const friends: any = await getFriends();
   // const friends: any = await model_friend.index();

   return (
      <div>
         <h3>Friendsx</h3>
         {/* {JSON.stringify(friends)} */}
         <FriendList friends={friends} />
      </div>
   );
}

export default Page;

// const handleDelete = async (id: string) => {
//    setLoadingDelete([...loadingDelete, Number(id)]);
//    // const deleteFriend = await fetch(`${apiBaseUrl}/api/friends${id}`, {
//    //    method: 'DELETE',
//    // });
//    // setLoadingDelete(loadingDelete.filter((id) => id === Number(id)));
// };

// const { data, error, isLoading } = useSWR('/api/friends', fetcher);
