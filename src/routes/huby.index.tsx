import { createFileRoute, Link } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { HUBS, hubPosts } from "@/lib/hubs";
import { pageHead } from "@/lib/seo";
import { wpisow } from "@/lib/posts";

export const Route = createFileRoute("/huby/")({
  head: () =>
    pageHead({
      title: "Huby",
      description: "Zbiory wpisów: Rodzina w Tesli, TERAFAB, Cybercab, FSD w UE, Starship.",
      path: "/huby",
    }),
  component: Huby,
});

function Huby() {
  return (
    <ListingShell
      title="Huby"
      description="Żywe zbiory z istniejących wpisów. Bez osobnego CMS — to, co już jest na blogu."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HUBS.map((hub) => {
          const n = hubPosts(hub).length;
          return (
            <Link
              key={hub.id}
              to="/huby/$slug"
              params={{ slug: hub.id }}
              className="group relative block min-h-72 overflow-hidden rounded-xl"
            >
              <img
                src={hub.cover}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/40 to-overlay/10" />
              <div className="relative z-10 flex h-full min-h-72 flex-col justify-end p-6">
                <h2 className="font-display text-3xl font-semibold leading-none">{hub.title}</h2>
                <p className="mt-2 text-sm text-fg/80">
                  {hub.copy} · {wpisow(n)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </ListingShell>
  );
}
