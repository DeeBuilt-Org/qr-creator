import type { ReactNode } from 'react';
import { QrCode } from 'lucide-react';
import './app-header.css';

/**
 * AppHeader — QR Creator's own sticky header: app mark + tool name on the left,
 * page controls (theme toggle) on the right. Surfaces come from the app's
 * shadcn tokens; the mark color is --app-header-accent in app-header.css,
 * which flips to gold under html.dark.
 */
export function AppHeader({ actions }: { actions?: ReactNode }) {
  return (
    <header className="app-header">
      <div className="app-header__title">
        <QrCode className="app-header__mark" aria-hidden />
        <h1 className="app-header__name">QR Creator</h1>
      </div>
      {actions && <div className="app-header__actions">{actions}</div>}
    </header>
  );
}
