const users = {
  success: true,
  message: "",
  data: [
    { name: "ricky" },
    { name: "rani" },
    { name: "rika" },
    { name: "ronal" },
  ],
};

export async function GET(request: Request) {
  return new Response(JSON.stringify(users));
}
