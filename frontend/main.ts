import { serve } from "@std/http/server";
import { greet } from "@workspace/lib";

const handler = (req: Request): Response => {
  const url = new URL(req.url);
  
  if (url.pathname === "/") {
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Frontend App</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>${greet("Frontend")}</h1>
          <p>This is the frontend workspace running on Deno!</p>
        </body>
      </html>
    `, {
      headers: { "content-type": "text/html" },
    });
  }
  
  return new Response("Not Found", { status: 404 });
};

console.log("Frontend server running on http://localhost:3000");
serve(handler, { port: 3000 });