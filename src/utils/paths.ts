/** Keep page and public-asset links under the configured deployment base. */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
}
