import { createFileRoute, Link } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { pageHead } from "@/lib/seo";
import { wpisow } from "@/lib/posts";
import { getHubList } from "@/lib/posts.functions";

export const Route = createFileRoute("/huby/")({
  loader: () => getHubList(),
  head: () =>
    pageHead({
      title: "Huby",
      description: "Zbiory wpisów: Rodzina w Tesli, TERAFAB, Cybercab, FSD w UE, Starship.",
      path: "/huby",
    }),
  component: Huby,
});

function Huby() {
  const hubs = Route.useLoaderData();
  return (
    <ListingShell
      title="Huby"
      description="Żywe zbiory z istniejących wpisów. Bez osobnego CMS — to, co już jest na blogu."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hubs.map((hub) => {
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
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/40 to-overlay/10" />
              <div className="relative z-10 flex h-full min-h-72 flex-col justify-end p-6">
                <h2 className="font-display text-3xl font-semibold leading-none">{hub.title}</h2>
                <p className="mt-2 text-sm text-fg/80">
                  {hub.copy} · {wpisow(hub.count)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </ListingShell>
  );
}
