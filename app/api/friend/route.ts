import { prismaError, prismaSuccess } from '@/helpers/api';
import { Messages } from '@/helpers/messages';
import * as model_friend from '@/lib/prisma/friend.prisma';

export const metadata = {
   title: `Friends`,
};

export async function GET(request: Request) {
   let response = '';

   try {
      const { result, error } = await model_friend.index();

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

export async function POST(request: Request) {
   let response = '';
   let body = null;

   try {
      body = await request.json();
      const { result, error }: any = await model_friend.store(body);

      if (error) throw new Error(error.message);

      response = prismaSuccess({
         data: result,
         body,
      });
   } catch (error: any) {
      response = prismaError(error, {
         message: Messages.CreateError,
         body,
      });
   }

   return new Response(response);
}
