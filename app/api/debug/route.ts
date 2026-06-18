export async function GET() {
  return Response.json({
    tokenExists: !!process.env.SANITY_API_TOKEN,
    tokenPrefix: process.env.SANITY_API_TOKEN?.slice(0, 5) ?? null,
    sanityVars: Object.keys(process.env).filter((key) =>
      key.includes("SANITY")
    ),
  });
}