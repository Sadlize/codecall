import 'styles/app.css';
import 'styles/variables.css';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts } from 'react-router';
import { siteUrl } from 'configs/env';

import { type Route } from './+types/root';
import { Error } from './error';
import { NotFound } from './not-found';

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <NotFound />;
      default:
        return <Error />;
    }
  }
  return <Error />;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Wizardry</title>
        <meta
          name="description"
          content="Starter template for frontend project based on Next.js framework with app directory"
        />
        <meta name="application-name" content="Wizardry" />
        <link rel="manifest" href="/assets/icons/site.webmanifest" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Wizardry" />
        <meta
          property="og:description"
          content="Starter template for frontend project based on Next.js framework with app directory"
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Wizardry" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/assets/images/starter-banner.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:alt" content="Wizardry social share image" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wizardry" />
        <meta
          name="twitter:description"
          content="Starter template for frontend project based on Next.js framework with app directory"
        />
        <meta name="twitter:image" content="/assets/images/starter-banner.png" />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="720" />
        <meta name="twitter:image:alt" content="Wizardry social share image" />
        <link rel="icon" href="/assets/icons/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/assets/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" sizes="180x180" type="image/png" />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
