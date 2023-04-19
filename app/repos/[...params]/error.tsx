'use client';

import { useEffect } from 'react';

function Error({ error }: { error: Error }) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error);
   }, [error]);
   return <div>Error {error.message}</div>;
}

export default Error;
