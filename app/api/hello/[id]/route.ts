export async function GET(request: Request, { params }: any) {
   const { id } = params;
   const { searchParams } = new URL(request.url);
   const name = searchParams.get('name');

   return new Response(`Hello, Next.js! ${id} ${name}`, { status: 201 });
}
