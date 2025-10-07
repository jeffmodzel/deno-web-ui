import { greet, APP_VERSION } from "@workspace/lib";

const handler = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);

    if (url.pathname === "/") {
        try {
            const html = await Deno.readTextFile("../frontend/index.html");
            return new Response(html, {
                headers: { "content-type": "text/html" },
            });
        } catch (_error) {
            return new Response("Error loading index.html", { status: 500 });
        }
    }

    if (url.pathname === "/api") {
        return new Response(JSON.stringify({
            message: greet("API Server"),
            version: APP_VERSION,
            timestamp: new Date().toISOString()
        }), {
            headers: { "content-type": "application/json" },
        });
    }

    if (url.pathname === "/health") {
        return new Response(JSON.stringify({ status: "ok" }), {
            headers: { "content-type": "application/json" },
        });
    }

    return new Response("Not Found", { status: 404 });
};

console.log("Web server running on http://localhost:8000");
Deno.serve({ port: 8000 }, handler);
