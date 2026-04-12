export function GET() {
  const policy = [
    "Contact: mailto:josef@mindpathbi.com",
    "Preferred-Languages: en, he",
    "Canonical: https://mindpathbi.com/.well-known/security.txt",
    "Expires: 2027-04-12T00:00:00.000Z",
  ].join("\n");

  return new Response(policy, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
