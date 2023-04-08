import { PrismaResponse } from './api';

export interface FriendsAPI extends PrismaResponse {
   data: {
      id: number;
      name: string;
   }[];
}
