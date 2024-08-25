import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Yassine AMAGHZAZ" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-xl py-4 font-semibold">hey, I'm Yassine</h1>
      <p className="py-2 text-pretty">
        Hello, I'm Yassine. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

