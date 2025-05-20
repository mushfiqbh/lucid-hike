export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const handle = searchParams.get("handle");

  if (!handle) {
    return new Response("handle required", { status: 400 });
  }

  const res = await fetch(
    `https://leetcode-api-pied.vercel.app/user/${handle}`
  );
  const data = await res.json();

  return Response.json(data);
}
