export async function GET() {
  const envKeys = Object.keys(process.env)
    .filter(
      (key) =>
        key.includes("SANITY") ||
        key.includes("AMPLIFY") ||
        key.includes("AWS")
    )
    .sort();

  return Response.json({
    tokenExists: !!process.env.SANITY_API_TOKEN,
    tokenLength: process.env.SANITY_API_TOKEN?.length ?? 0,
    envKeys,
    nodeEnv: process.env.NODE_ENV,
  });
}