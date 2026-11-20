import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  onOpenCookieSettings,
  readConsent,
  trackPageView,
  trackPageViewAfterConsent,
  updateAnalyticsConsent,
  writeConsent,
} from "@/lib/analytics";

const buttonClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border bg-bg px-4 py-2.5 text-sm font-medium text-fg hover:border-fg/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-36";

export function CookieConsent() {
  const path = useRouterState({
    select: (state) => state.location.pathname + state.location.searchStr,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    trackPageView(path);
  }, [path]);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
    return onOpenCookieSettings(() => setVisible(true));
  }, []);

  function accept() {
    const alreadyGranted = readConsent() === "granted";
    writeConsent("granted");
    updateAnalyticsConsent("granted");
    if (!alreadyGranted) trackPageViewAfterConsent(path);
    setVisible(false);
  }

  function reject() {
    writeConsent("denied");
    updateAnalyticsConsent("denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Zgoda na pliki cookie"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted">
          Używamy plików cookie Google Analytics, żeby wiedzieć, które artykuły czytacie
          najchętniej. Zgoda obejmuje też pomiar X. Możesz się zgodzić albo odmówić. Szczegóły:{" "}
          <Link
            to="/polityka-prywatnosci"
            className="text-fg underline underline-offset-2 hover:text-link-hover"
          >
            Polityka prywatności
          </Link>
          .
        </p>
        <div className="grid grid-cols-2 gap-3 sm:flex sm:shrink-0">
          <button type="button" className={buttonClass} onClick={accept}>
            Akceptuję
          </button>
          <button type="button" className={buttonClass} onClick={reject}>
            Odrzucam
          </button>
        </div>
      </div>
    </div>
  );
}
