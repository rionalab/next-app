import React from 'react';

function Layout({ children }: any) {
   return (
      <div>
         <h1>Login</h1>
         {children}
      </div>
   );
}

export default Layout;
