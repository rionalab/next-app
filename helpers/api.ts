import { PrismaResponse, PrismaResultOptions } from '@/types/api';
import { Messages } from './messages';
import { Prisma } from '@prisma/client';

export const prismaError = (error: any, opts?: PrismaResultOptions) => {
   let result: PrismaResponse = {
      success: false,
      code: opts?.code ?? error?.code ?? Messages.Unknown,
      message: opts?.message ?? error?.meta?.cause ?? Messages.UnknownErr,
      body: opts?.body ?? null,
      data: opts?.data ?? null,
   };

   return JSON.stringify(result);
};

export const prismaSuccess = (opts?: PrismaResultOptions) => {
   let result: PrismaResponse = {
      success: true,
      code: opts?.code ?? 200,
      message: opts?.message ?? '',
      body: opts?.body ?? null,
      data: opts?.data ?? null,
   };

   return JSON.stringify(result);
};
