import { prisma } from './db';

export async function index() {
   try {
      const result = await prisma.friend.findMany();
      return { result };
   } catch (error: any) {
      return { error };
   }
}

export async function show(id: string | number) {
   try {
      const result = await prisma.friend.findUnique({
         where: { id: Number(id) },
      });
      return { result };
   } catch (error) {
      return { error };
   }
}

export async function store(data: any) {
   try {
      const result = await prisma.friend.create({
         data,
      });
      return { result };
   } catch (error) {
      return { error };
   }
}
