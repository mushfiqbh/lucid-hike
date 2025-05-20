export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const handle = searchParams.get("handle");

  if (!handle) {
    return new Response("CodeChef handle is required", { status: 400 });
  }

  try {
    const res = await fetch(`https://codechef-api.vercel.app/handle/${handle}`);
    if (!res.ok) {
      return new Response("Failed to fetch CodeChef data", {
        status: res.status,
      });
    }

    const data = await res.json();
    return Response.json(data);
  } catch {
    return new Response("Error fetching CodeChef data", { status: 500 });
  }
}
