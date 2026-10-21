/** The "Made by DeeBuilt" credit in the footer and on the About and Privacy pages. */
export function DeeBuiltCredit() {
  return (
    <span className="text-xs text-muted-foreground">
      Made by{' '}
      <a href="https://deebuilt.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
        DeeBuilt
      </a>
    </span>
  );
}
