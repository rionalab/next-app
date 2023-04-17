import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
   const res = await prisma.projects.findMany();
   return new Response(JSON.stringify(res));
}

export async function POST(request: Request) {
   // const fruit = await prisma.
   // console.log(333333, res);

   return new Response(`JSON.stringify(res)`);
}
