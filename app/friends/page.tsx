'use client';

import { apiBaseUrl } from '@/helpers/app';
import { handleGet } from '@/helpers/request';
import { PrismaResponse } from '@/types/api';
import { FriendsAPI } from '@/types/friend';
import { Prisma } from '@prisma/client';
import { useState, use } from 'react';

const getFriends = async () => {
   const res = await fetch(`${apiBaseUrl}/friends`);
   return await res.json();
};

async function Page() {
   const [loadingDelete, setLoadingDelete] = useState<Number[]>([]);

   const friends: any = use(getFriends());

   const handleDelete = async (id: string) => {
      setLoadingDelete([...loadingDelete, Number(id)]);
      // const deleteFriend = await fetch(`${apiBaseUrl}/api/friends${id}`, {
      //    method: 'DELETE',
      // });
      // setLoadingDelete(loadingDelete.filter((id) => id === Number(id)));
   };

   // const friends = use()

   return (
      <div>
         <h3>Friends</h3>
         <ol style={{ marginLeft: `40px` }}>
            {friends.data.map((friend) => {
               return (
                  <li key={friend.id}>
                     {friend.name}
                     <button
                        disabled={loadingDelete.includes(friend.id)}
                        onClick={() => handleDelete(String(friend.id))}
                     >
                        Delete
                     </button>
                  </li>
               );
            })}
         </ol>
      </div>
   );
}

export default Page;
