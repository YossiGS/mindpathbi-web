export function GET() {
  const policy = [
    "version: STSv1",
    "mode: enforce",
    "mx: smtp.google.com",
    "max_age: 604800",
  ].join("\n");

  return new Response(policy, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
