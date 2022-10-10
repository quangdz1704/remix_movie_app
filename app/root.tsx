import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import styles from './tailwind.css';

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
}

export const meta: MetaFunction = () => {
  return {
    desciption: 'A films website',
    charset: "utf-8",
    title: "Studio films",
    viewport: "width=device-width,initial-scale=1",
  }
};

/**
 * Not found page
 * @returns 
 */
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="border-2 border-dashed  border-red-500 h-96 flex justify-center items-center">
        <h1>
        !{caught.status}! ERROR: {caught.statusText}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
