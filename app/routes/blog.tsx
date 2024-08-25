import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Yassine AMAGHZAZ" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Page() {
    return (
        <div>
            <h1 className="text-xl py-4 font-semibold">Blog</h1>
        </div>
    );
}

