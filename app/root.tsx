import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import IconLink from "./icons/IconLink";
import IconSun from "./icons/IconSun";
import { proxy, useSnapshot } from "valtio";
import clsx from "clsx";
import IconMoon from "./icons/IconMoon";

export function Layout({ children }: { children: React.ReactNode }) {
  const dark = useSnapshot(darkMode).isDark
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
        <link href="https://fonts.googleapis.com/css2?family=Moderustic:wght@300..800&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body className={clsx([dark && "dark", "bg-gray-300", "dark:bg-black"])}>
        <div className="flex flex-col w-full items-center text-gray-700 dark:text-gray-400">
          <div className="max-w-[720px] w-[80%] py-4">
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}


function NavBar() {
  const dark = useSnapshot(darkMode).isDark
  const toggleDarkMode = () => {
    darkMode.isDark = !dark
  }
  return (
    <div className="flex gap-2 py-4 items-center text-gray-500">
      <div className="hover:text-blue-500">
        <Link to={"/"}>
          home
        </Link>
      </div>
      <div className="hover:text-blue-500">
        <Link to={"/projects"}>
          projects
        </Link>
      </div>
      <div className="hover:text-blue-500">
        <Link to={"/blog"}>
          blog
        </Link>
      </div>
      <div className="hover:text-blue-500">
        <Link to={"/gallery"}>
          gallery
        </Link>
      </div>
      <div className="hover:text-blue-500 cursor-pointer" onClick={toggleDarkMode}>
        {dark ? < IconSun /> : <IconMoon />}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="flex gap-2 py-4 text-gray-500">
      <div className="hover:text-blue-500">
        <Link to={"/"} className="flex gap-2 items-center">
          <IconLink width={"rem"} />  Github
        </Link>
      </div>
      <div className="hover:text-blue-500">
        <Link to={"/"} className="flex gap-2 items-center">
          <IconLink width={"rem"} />  Linkedin
        </Link>
      </div>
    </div>
  )
}

const darkMode = proxy({ isDark: true })