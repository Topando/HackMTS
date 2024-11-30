import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    department: number;
    description: string;
    role: string | null;
    photo: string | null;
  }
  
  interface ApiState {  
    data: { count: number; next: string | null; previous: string | null; results: User[] } | null;
    loading: boolean;
    error: string | null;
  }



  export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    endpoints: (builder) => ({
      getUsers: builder.query<User[], void>({
        query: () => '/api/v1/profiles/',
      }),
      // Add more endpoints as needed
    }),
  });
  
  export const { useGetUsersQuery } = apiSlice;