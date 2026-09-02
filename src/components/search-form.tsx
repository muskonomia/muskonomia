export function SearchForm({
  defaultValue = "",
  compact = false,
}: {
  defaultValue?: string;
  compact?: boolean;
}) {
  return (
    <form
      method="get"
      action="/szukaj"
      role="search"
      className={compact ? "" : "flex max-w-md flex-col gap-3 sm:flex-row"}
    >
      <input
        id={compact ? "q-header" : "q-page"}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Szukaj"
        aria-label="Szukaj wpisów"
        className={
          compact
            ? "h-9 w-36 rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none placeholder:text-muted focus:border-accent sm:w-44"
            : "min-h-12 flex-1 rounded-md border border-border bg-bg px-4 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
        }
      />
      {compact ? null : (
        <button
          type="submit"
          className="min-h-12 rounded-md bg-accent px-6 text-sm font-semibold text-fg hover:bg-accent-hover"
        >
          Szukaj
        </button>
      )}
    </form>
  );
}
