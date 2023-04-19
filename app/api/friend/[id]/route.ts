import { prismaSuccess, prismaError } from '@/helpers/api';
import * as model_friend from '@/lib/prisma/friend.prisma';

export async function GET(request: Request, { params }: any) {
   let response = '';

   const { id } = params;

   try {
      const { result, error }: any = await model_friend.show(id);

      if (error) throw new Error(error.message);

      response = prismaSuccess({
         data: result,
      });
   } catch (error: any) {
      response = prismaError(error, {
         message: error.message,
      });
   }

   return new Response(response);
}
