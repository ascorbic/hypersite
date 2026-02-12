import { ImageResponse } from "workers-og";

export async function handleOGRequest(
  request: Request,
  assets: Fetcher
): Promise<Response> {
  const toDataUri = async (path: string, mime: string) => {
    const buf = await assets
      .fetch(new URL(path, request.url))
      .then((res) => res.arrayBuffer());
    const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
    return `data:${mime};base64,${b64}`;
  };

  const [chicago, geneva, ditherUrl, stripeUrl] = await Promise.all([
    assets
      .fetch(new URL("/fonts/sysfont.otf", request.url))
      .then((res) => res.arrayBuffer()),
    assets
      .fetch(new URL("/fonts/bitgeneva12.otf", request.url))
      .then((res) => res.arrayBuffer()),
    toDataUri("/images/dither.png", "image/png"),
    toDataUri("/images/stripe.png", "image/png"),
  ]);
  const url = new URL(request.url);

  const title = url.searchParams.get("title") || "Matt's Home Stack";
  const description =
    url.searchParams.get("description") ||
    "I build tools to help people create better websites";

  // HTMLRewriter doesn't decode HTML entities, so strip tags instead of escaping to entities
  const sanitize = (s: string) => s.replace(/[<>]/g, "");

  const html = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Chicago;padding:30px;background-image:url(${ditherUrl});background-size:8px 8px">
  <div style="display:flex;flex-direction:column;background:#fff;border:4px solid #000;box-shadow:4px 4px 0 #000;max-width:1000px;width:100%">
    <div style="display:flex;border-bottom:4px solid #000;padding:8px 4px">
      <div style="display:flex;font-size:18px;height:44px;width:100%;background-image:url(${stripeUrl});background-repeat:repeat-x;justify-content:center;align-items:center">
        <div style="display:flex;font-size:44px;background-color:white;height:44px;padding:0 24px;line-height:44px">Matt Kane's Home</div>
      </div>
    </div>
    <div style="display:flex;font-size:64px;padding:60px;justify-content:center;text-align:center">${sanitize(title)}</div>
    <div style="display:flex;font-size:48px;padding:0 60px 60px 60px;justify-content:center;text-align:center;font-family:Geneva">${sanitize(description)}</div>
  </div>
</div>`;

  try {
    return new ImageResponse(html, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Chicago",
          data: chicago,
          style: "normal",
        },
        {
          name: "Geneva",
          data: geneva,
          style: "normal",
        },
      ],
    });
  } catch (e) {
    console.error(e);
    return new Response("Internal Server Error", { status: 500 });
  }
}
