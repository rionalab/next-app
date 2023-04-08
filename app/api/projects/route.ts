import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
   // const res = await prisma.projects.findMany();
   return new Response('hello');
}

// export async function POST(request: Request) {
//    const project = await prisma.projects.create({
//       data: {
//          email: 'elsa@prisma.io',
//          name: 'Elsa Prisma',
//       },
//    });

//    const res = await prisma.projects.findMany();
//    return new Response(JSON.stringify(res));
// }
