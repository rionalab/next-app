import Friend from './Friend';

interface Props {
   friends: {
      data: any[];
   };
}

function FriendList({ friends }: Props) {
   return (
      <div>
         <ol style={{ marginLeft: `40px` }}>
            {friends.data.map((friend: any) => {
               return <Friend key={friend.id} friend={friend} />;
            })}
         </ol>
      </div>
   );
}

export default FriendList;
