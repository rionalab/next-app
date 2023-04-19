import Link from 'next/link';
import React from 'react';

function Friend({ friend }: any) {
   return (
      <li>
         <Link href={`/friends/${friend.id}`}>{friend.name}</Link>
         <button /* disabled={loadingDelete.includes(friend.id)} */>
            Delete
         </button>
      </li>
   );
}

export default Friend;
