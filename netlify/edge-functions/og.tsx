import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.6/mod.ts";

export default async function handler(req: Request) {
  const chicago = await fetch(new URL("/fonts/sysfont.otf", req.url)).then(
    (res) => res.arrayBuffer()
  );
  const geneva = await fetch(new URL("/fonts/bitgeneva12.otf", req.url)).then(
    (res) => res.arrayBuffer()
  );
  const stripe = new URL("/images/stripe.png", req.url);

  const url = new URL(req.url);

  const title = url.searchParams.get("title") || "Matt's Home Stack";
  const description =
    url.searchParams.get("description") ||
    "I build tools to help people create better websites";

  try {
    const res = await new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Chicago",
            padding: 30,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2' viewBox='0 0 2 2'%3E%3Crect width='1' height='1' fill='%23666'/%3E%3Crect x='1' y='1' width='1' height='1' fill='%23666'/%3E%3C/svg%3E")`,
            backgroundSize: "8px 8px",
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "4px solid #000",
              boxShadow: "4px 4px 0 #000",
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                borderBottom: "4px solid #000",
                padding: "8px 4px",
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  height: 44,
                  width: "100%",
                  backgroundImage: `url(${JSON.stringify(stripe.href)})`,
                  backgroundRepeat: "repeat-x",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    marginLeft: 30,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "white",
                      border: "4px black solid",
                      margin: "0 4px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 44,
                    backgroundColor: "white",
                    height: 44,
                    padding: "0 24px",
                  }}
                >
                  Matt Kane's Home
                </div>
                <div
                  style={{
                    width: 44,
                    marginRight: 30,
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                fontSize: 64,
                textAlign: "center",
                padding: 60,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 48,
                textAlign: "center",
                padding: "0 60px 60px 60px",
                display: "flex",
                justifyContent: "center",
                fontFamily: "Geneva",
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
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
      }
    );
    return res;
  } catch (e) {
    console.error(e);
    return new Response("Internal Server Error", { status: 500 });
  }
}
export const config = {
  path: "/og",
};
