import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Promotions</h1>
      {children}
    </div>
  );
}

export default Layout;
