import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Afra Nazeer — Portfolio",
    short_name: "Afra Nazeer",
    description: "Business analysis, technology, data, and communication portfolio.",
    start_url: `${siteConfig.basePath}/`,
    display: "standalone",
    background_color: "#f6f3ed",
    theme_color: "#f6f3ed",
    icons: [{ src: `${siteConfig.basePath}/icon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}
