import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { openCookieSettings } from "@/lib/analytics";
import { pageHead } from "@/lib/seo";
import { SITE_URL, SITE_X_HANDLE, SITE_X_URL } from "@/lib/site";

const PATH = "/polityka-prywatnosci";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () =>
    pageHead({
      title: "Polityka prywatności",
      description:
        "Kto prowadzi muskonomia.pl, jakie dane zbiera Google Analytics 4 po zgodzie i jak wycofać cookies.",
      path: PATH,
      image: "/img/terafab-render-night.jpg",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Polityka prywatności",
        url: `${SITE_URL}${PATH}`,
        inLanguage: "pl-PL",
        dateModified: "2026-11-19",
      },
    }),
  component: PolitykaPrywatnosci,
});

const heading = "pt-6 font-display text-2xl font-semibold tracking-tight text-fg";
const link = "text-accent hover:text-accent-hover";

function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-16">
        <div className="relative isolate min-h-64 overflow-hidden sm:min-h-72">
          <img
            src="/img/terafab-render-night.jpg"
            alt=""
            width={1568}
            height={882}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/75 to-overlay/45" />
          <div className="absolute inset-0 bg-overlay/40" />
          <div className="relative z-10 mx-auto flex min-h-64 max-w-6xl items-end px-5 py-10 sm:min-h-72">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/80">Serwis</p>
              <h1 className="mt-1 font-display text-4xl font-semibold leading-none tracking-tight text-fg drop-shadow-sm sm:text-6xl">
                Polityka prywatności
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-10 pb-20">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg/90 sm:text-lg">
            <p>Data aktualizacji: 19.11.2026.</p>

            <h2 className={heading}>Administrator</h2>
            <p>
              Administratorem serwisu muskonomia.pl jest Sebastian Lipiński. W sprawie danych
              osobowych napisz przez konto{" "}
              <a href={SITE_X_URL} target="_blank" rel="noopener noreferrer" className={link}>
                {SITE_X_HANDLE}
              </a>{" "}
              na X.
            </p>

            <h2 className={heading}>Google Analytics</h2>
            <p>
              Statystykę odwiedzin prowadzi Google Analytics 4, identyfikator G-Z4TZTX4EF4. Pomiar
              włącza się dopiero po zgodzie. Zanim ją wyrazisz, zgoda na cookies analityczne jest
              wyłączona. Sam skrypt Google ładuje się przy otwarciu strony, żeby przyjąć tę decyzję.
              Dostawcą jest Google Ireland Limited. Google może przekazać dane do USA na podstawie
              EU-US Data Privacy Framework. W plikach cookie zostają anonimowe identyfikatory. Zgody
              reklamowe w tym narzędziu zostają wyłączone: nie włączamy zapisu pod reklamy, danych
              użytkownika do reklam ani personalizacji reklam.
            </p>

            <h2 className={heading}>Zapis wyboru</h2>
            <p>
              Zgoda albo odmowa zostaje w tej przeglądarce, w localStorage, pod kluczem
              muskonomia-cookie-consent. Przy kolejnej wizycie baner się nie pojawia, a zapisana
              decyzja działa dalej.
            </p>

            <h2 className={heading}>Jak wycofać zgodę</h2>
            <p>
              W stopce jest odnośnik{" "}
              <button type="button" onClick={openCookieSettings} className={`inline ${link}`}>
                Ustawienia cookies
              </button>
              . Otwiera ten sam baner. Wybierz „Odrzucam”, a pomiar analityczny przestaje działać.
            </p>

            <h2 className={heading}>Hosting</h2>
            <p>
              Serwis działa na hostingu Hostinger. Serwer zapisuje logi techniczne połączeń, w tym
              adres IP, czas żądania i adres odwiedzonej strony. Logi służą do utrzymania strony i
              do bezpieczeństwa.
            </p>

            <h2 className={heading}>Wpisy z X i filmy</h2>
            <p>
              W artykułach osadzamy wpisy z X. Ładuje się wtedy skrypt widgets.js z
              platform.twitter.com. Osadzenie ma atrybut data-dnt. Obok są zwykłe linki do X.
              Osadzone wpisy i wizyta na X podlegają{" "}
              <a
                href="https://x.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                polityce prywatności X
              </a>
              .
            </p>
            <p>
              Na każdej stronie ładuje się też piksel X ze skryptu static.ads-twitter.com,
              identyfikator rfr6q. Ten piksel nie czeka na zgodę z banera cookies. Działa według
              polityki X.
            </p>
            <p>
              Część artykułów osadza film z YouTube przez youtube-nocookie.com. Odtwarzacz podlega
              polityce Google.
            </p>

            <h2 className={heading}>Komentarze</h2>
            <p>
              Pod artykułem możesz zostawić komentarz. Prosimy o imię albo nick i treść. Adresu
              e-mail nie zbieramy. Imię i komentarz zapisujemy w bazie serwisu, żeby pokazać je pod
              wpisem. W przeglądarce zostaje losowy identyfikator w localStorage, klucz
              musko-comment-token. Po nim poznajemy Twoje komentarze i dajemy je usunąć. Jeśli
              zaznaczysz zapamiętanie danych, imię zostaje w tej przeglądarce pod kluczem
              musko-comment-name.
            </p>
            <p>
              Po dodaniu komentarza serwer wysyła administratorowi powiadomienie przez
              formsubmit.co. W powiadomieniu są imię, adres artykułu i treść komentarza.
            </p>
            <p>
              Nie ma formularza newslettera. Nie ma też logowania, przy którym podajesz adres
              e-mail.
            </p>

            <h2 className={heading}>Twoje prawa</h2>
            <p>
              Masz prawo dostępu do swoich danych, prawo do ich usunięcia i prawo sprzeciwu wobec
              przetwarzania. Możesz złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
