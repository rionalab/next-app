import { prismaError, prismaSuccess } from '@/helpers/api';
import { Messages } from '@/helpers/messages';
import { prisma } from '@/lib/db';

interface Context {
   params: { id: string };
}

// export async function DELETE(req: Request, context: Context) {
//    let response = '';
//    let body = null;

//    try {
//       const { id } = context.params;
//       body = { id: Number(id) };
//       const data = await prisma.friend
//          .delete({
//             where: body,
//          })
//          .catch();

//       response = prismaSuccess({ data, message: Messages.DeleteSuccess });
//    } catch (error: any) {
//       response = prismaError(error, { body, data: error.message });
//    }

//    return new Response(response);
// }
