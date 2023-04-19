'use client';

import FriendList from '@/comps/friend/FriendList';
import { handleGet } from '@/helpers/request';
import { useEffect, useState } from 'react';

function Page() {
   const [loading, setloading] = useState(true);
   const [friends, setfriends] = useState<any>(null);

   async function getData() {
      const req = await handleGet('/api/friend');
      console.clear();
      console.log(req);
      // setfriends(await req.json());

      setfriends(req);
      setloading(false);
   }

   useEffect(() => {
      getData();
   }, []);

   if (loading) {
      return <p>Loading.........................</p>;
   }

   return (
      <div>
         <h1>AAAAAAA</h1>
         <FriendList friends={friends} />
      </div>
   );
}

export default Page;
