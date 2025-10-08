import { greet, APP_VERSION, PORT } from "@workspace/lib";
import { serveDir } from "@std/http/file-server";

const handler = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);

    console.log(`[${req.method}] ${url.pathname}`);

    // API endpoints
    if (url.pathname === "/api") {
        return new Response(JSON.stringify({
            message: greet("API Server"),
            version: APP_VERSION,
            timestamp: new Date().toISOString()
        }), {
            headers: { "content-type": "application/json" },
        });
    }

    if (url.pathname === "/api/names" && req.method === 'GET') {
        const names = [
            "John Doe",
            "Jane Smith",
            "Mike Johnson",
            "Sarah Wilson",
            "Alex Chen",
            "Emily Davis",
            "David Brown",
            "Lisa Garcia"
        ];

        return new Response(JSON.stringify({
            names: names,
            count: names.length,
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

    if (url.pathname.startsWith("/api/")) {
        return new Response(JSON.stringify({
            error: "Not Found",
            message: `API endpoint ${url.pathname} not found`,
            timestamp: new Date().toISOString()
        }), {
            status: 404,
            headers: { "content-type": "application/json" },
        });
    }

    // Serve files from the frontend dist directory
    return serveDir(req, {
        fsRoot: "../frontend/dist",
        urlRoot: "",
    });
};

console.log("Web server running on http://localhost:8000");
Deno.serve({ port: PORT }, handler);
