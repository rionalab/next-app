import { Open_Sans } from 'next/font/google';

const OpenSans = Open_Sans({
   subsets: ['latin'],
});

export default function Home() {
   return (
      <main className={OpenSans.className}>
         Homepage
         {/* <Trending /> */}
      </main>
   );
}
