import Link from 'next/link';

interface Repo {
   id: number;
   name: string;
}

async function fetchRepos() {
   const req = await fetch('https://api.github.com/users/rionalab/repos', {
      next: {
         revalidate: 10,
      },
   });
   await new Promise((resolve) => setTimeout(resolve, 1000));
   return await req.json();
}

async function Page() {
   const repos: Repo[] = await fetchRepos();
   return (
      <div>
         <h1>my Repos</h1>
         <ol>
            {repos.map((repo) => (
               <li key={repo.id}>
                  <Link href={`/repos/${repo.id}/${repo.name}`}>
                     {repo.name}
                  </Link>
               </li>
            ))}
         </ol>
      </div>
   );
}

export default Page;
