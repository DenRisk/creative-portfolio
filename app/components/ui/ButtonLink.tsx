import React from "react";
import clsx from "clsx";
import {ButtonLinkComponentModel} from '@/app/models/button'

function ButtonLink({children, variant = "primary", href, target = "_blank"}: ButtonLinkComponentModel) {
    const baseStyles =
        "px-4 py-2 rounded-lg font-medium transition-all duration-200 leading-[1.25] min-w-32 inline-flex items-center justify-center";

    const variants = {
        primary: "text-neutral-0 bg-gradient-to-b from-accent-primary to-accent-secondary",
        secondary: "text-neutral-0 bg-transparent border border-accent-primary",
        link: "text-neutral-30 bg-transparent hover:text-neutral-0",
    };

    const hoverStyle = {
        circle: "relative overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-accent-hover before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:border-accent-hover"
    }

    return (
        <a className={clsx(variant !== "link" ? baseStyles : '', variants[variant], hoverStyle['circle'])} href={href} target={target}>
            <span className="relative z-10">{children}</span>
        </a>
    );
}

export default ButtonLink;