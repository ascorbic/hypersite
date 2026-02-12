import { handleOGRequest } from "./og";

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/og") {
      return handleOGRequest(request, env.ASSETS);
    }

    // Everything else is served from static assets
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
