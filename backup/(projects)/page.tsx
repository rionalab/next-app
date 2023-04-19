import { Prisma, PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';

interface Props {
   projects: Prisma.ProjectsSelect;
}

async function getData() {
   const prisma = new PrismaClient();
   const projects = await prisma.projects.findMany();
}

function Page({ projects }: Props) {
   const data = getData();

   return <div>aaa</div>;
}

export default Page;
