const rawBase = import.meta.env.BASE_URL;

/** Site base path, always with a trailing slash (Astro omits it when `base` has none). */
export const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** Join a site-root-relative path onto the base, tolerating a leading slash. */
export const withBase = (path: string) => `${base}${path.replace(/^\//, '')}`;
