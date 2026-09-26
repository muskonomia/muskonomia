-- Komentarze pod artykułami. user_id jest TEXT (tak jak "user".id i dev-user),
-- bez klucza obcego, żeby wpis dało się zostawić także gdy konto zniknie.

create table if not exists post_comment (
  id text primary key,
  slug text not null,
  user_id text not null,
  author_name text not null,
  body text not null,
  created_at timestamptz not null default now(),
  constraint post_comment_body_len check (char_length(body) between 1 and 1000)
);

create index if not exists post_comment_slug_created_idx
  on post_comment (slug, created_at);
