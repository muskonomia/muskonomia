import { createFileRoute } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { pageHead } from "@/lib/seo";
import { SITE_AUTHOR, SITE_CONTACT_EMAIL, SITE_X_HANDLE, SITE_X_URL } from "@/lib/site";

export const Route = createFileRoute("/o-serwisie")({
  head: () =>
    pageHead({
      title: "O serwisie",
      description:
        "muskonomia.pl — aktualności o Tesli, SpaceX, xAI, Neuralink i The Boring Company po polsku. Kontakt: muskonomia.pl@gmail.com.",
      path: "/o-serwisie",
    }),
  component: OSerwisie,
});

function OSerwisie() {
  return (
    <ListingShell kicker="Serwis" title="O serwisie">
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg/90 sm:text-lg">
        <p>
          muskonomia.pl zbiera po polsku to, co dzieje się wokół firm Elona Muska. Źródła są
          publiczne: wpisy na X, komunikaty firm, notatki analityków, lokalna prasa.
        </p>
        <p>
          Na blogu są Tesla, SpaceX, xAI, Neuralink i The Boring Company. Gdy we wpisie jest kąt
          rynkowy — TSLA, wyceny, porównywalne spółki — też tam ląduje, w dziale Inne albo przy
          właściwej firmie.
        </p>
        <p>
          To nie jest blog o pomocy humanitarnej. To nie jest serwis o katastrofizmie wokół
          Starlinka. Starlink pojawia się jako produkt SpaceX, nie jako scenariusz końca sieci.
        </p>
        <p>Redakcja: {SITE_AUTHOR}.</p>
        <p>
          Kontakt serwisu:{" "}
          <a href={`mailto:${SITE_CONTACT_EMAIL}`} className="text-accent hover:text-accent-hover">
            {SITE_CONTACT_EMAIL}
          </a>
          . Na X:{" "}
          <a
            href={SITE_X_URL}
            target="_blank"
            rel="me noopener noreferrer"
            className="text-accent hover:text-accent-hover"
          >
            {SITE_X_HANDLE}
          </a>
          .
        </p>
      </div>
    </ListingShell>
  );
}
