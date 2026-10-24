import type { ReactNode } from 'react';
import './app-header.css';

/**
 * AppHeader: the sticky header lockup. The mark in a colored tile, then the
 * tool name in the display face; page-level controls (theme toggle) on the
 * right.
 *
 * Copied from Decision Lab's lockup (the DeeBuilt tools design system in
 * opsette-tools.github.io/docs/DEEBUILT-TOOLS-MIGRATION.md). QR Creator has no
 * side rail, so it drops the nav toggle.
 */
export function AppHeader({
  mark,
  name,
  actions,
}: {
  /** An icon drawn in currentColor; it renders white on the tile. */
  mark: ReactNode;
  name: string;
  actions?: ReactNode;
}) {
  return (
    <header className="app-header">
      <div className="app-header__lockup">
        <span className="app-header__tile" aria-hidden="true">
          {mark}
        </span>
        <h1 className="app-header__name">{name}</h1>
      </div>
      {actions && <div className="app-header__actions">{actions}</div>}
    </header>
  );
}

/** QR Creator's mark: the code squares from its favicon, in currentColor. */
export function QrMark() {
  return (
    <svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth={24} strokeLinecap="round" strokeLinejoin="round">
      <rect x="48" y="48" width="64" height="64" rx="8" />
      <rect x="48" y="144" width="64" height="64" rx="8" />
      <rect x="144" y="48" width="64" height="64" rx="8" />
      <line x1="144" y1="144" x2="144" y2="176" />
      <polyline points="144 208 176 208 176 144" />
      <line x1="176" y1="160" x2="208" y2="160" />
      <line x1="208" y1="192" x2="208" y2="208" />
    </svg>
  );
}
