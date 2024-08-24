import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import IconLink from "~/icons/IconLink";
import IconSun from "~/icons/IconSun";

export const meta: MetaFunction = () => {
  return [
    { title: "Yassine AMAGHZAZ" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col w-full items-center text-gray-300">
      <div className="max-w-[720px] w-[80%] py-4">
        <NavBar />
        <h1 className="text-xl py-4 font-semibold">hey, I'm Yassine</h1>
        <p className="py-2 text-pretty">
          Hello, I'm Yassine. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <Footer />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="flex gap-2 py-4 items-center text-gray-400">
      <div className="hover:text-blue-500">
        <Link to={"/"}>
          home
        </Link>
      </div>
      <div className="hover:text-blue-500">
        <Link to={"/"}>
          projects
        </Link>
      </div>
      <div className="hover:text-blue-500">
        <Link to={"/"}>
          blog
        </Link>
      </div>
      <div className="hover:text-blue-500">
        <Link to={"/"}>
          gallery
        </Link>
      </div>
      <div className="hover:text-blue-500 cursor-pointer">
        <IconSun />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="flex gap-2 py-4 text-gray-400">
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