export const handleGet = async (url: string) => {
   const req = await fetch(url);

   if (!req.ok) {
      throw new Error('Failed to fetch data.');
   }

   return await req.json();
};
