import { ComponentPropsWithoutRef } from "react";

export function H1(props: ComponentPropsWithoutRef<"h1">) {
    return <h1 className="text-slate-300 text-3xl font-bold py-6" {...props} />
}
export function H2(props: ComponentPropsWithoutRef<"h2">) {
    return <h2 className="text-slate-200 text-2xl font-semibold py-2" {...props} />
}
export function H3(props: ComponentPropsWithoutRef<"h3">) {
    return <h3 className="text-slate-200 text-xl font-semibold py-1" {...props} />
}

export function P(props: ComponentPropsWithoutRef<"p">) {
    return <p className="text-slate-300 text-2xl py-1 font-semibold lg:text-justify" {...props} />
}