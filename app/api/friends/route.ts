import { prismaError, prismaSuccess } from '@/helpers/api';
import { Messages } from '@/helpers/messages';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
   const data = await prisma.friend.findMany();
   return new Response(
      prismaSuccess({
         data,
      })
   );
}

// export async function POST(request: Request) {
//    let result = '';
//    let body = null;

//    try {
//       const { name } = await request.json();
//       body = { name };
//       const data = await prisma.friend.create({ data: body });

//       result = prismaSuccess({
//          code: 201,
//          body,
//          data,
//          message: Messages.CreateSuccess,
//       });
//    } catch (error: any) {
//       result = prismaError(error, { body, data: error.message });
//    }

//    return new Response(result);
// }
