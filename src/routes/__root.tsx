import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { CookieConsent } from "@/components/cookie-consent";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { GA_BOOT_SCRIPT, GA_CONFIG_SCRIPT, GA_MEASUREMENT_ID, X_PIXEL_BOOT_SCRIPT } from "@/lib/analytics";
import appCss from "../styles.css?url";

const APP_NAME = "muskonomia.pl";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: "Aktualności o Tesli, SpaceX, xAI i Elonie Musku po polsku: Robotaxi, Starlink, Grok, Cybercab i Optimus.",
      },
      { name: "theme-color", content: "#0a0a0b" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "alternate", type: "application/rss+xml", title: "muskonomia.pl", href: "/rss.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: GA_BOOT_SCRIPT }} />
        {/* defer, not async: React 19 hoists async scripts above this inline consent snippet. */}
        <script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: GA_CONFIG_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: X_PIXEL_BOOT_SCRIPT }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <CookieConsent />
        <Scripts />
      </body>
    </html>
  ),
});
