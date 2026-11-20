import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { CookieConsent } from "@/components/cookie-consent";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { GA_BOOT_SCRIPT, GA_CONFIG_SCRIPT, GA_MEASUREMENT_ID, X_PIXEL_BOOT_SCRIPT } from "@/lib/analytics";
import appCss from "../styles.css?url";
import bodyFont from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2?url";
import displayFont from "@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff2?url";

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
      { rel: "preload", href: bodyFont, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: displayFont, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
      { rel: "alternate", type: "application/rss+xml", title: "muskonomia.pl", href: "/rss.xml" },
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
