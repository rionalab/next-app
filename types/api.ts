export interface PrismaResultOptions {
   message?: string;
   code?: number;
   body?: any;
   data?: any;
}

export interface PrismaResponse {
   success: boolean;
   message: string;
   code: number;
   body: any;
   data: any;
}
