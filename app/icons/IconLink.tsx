import * as React from "react";

function IconLink(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M14 0a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 001 0V5.5a.5.5 0 00-.5-.5H6.525a.5.5 0 100 1h2.768l-4.096 4.096a.5.5 0 00.707.707z" />
        </svg>
    );
}

export default IconLink;

