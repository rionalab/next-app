"use client";

import { useEffect } from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      Error
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Error;
