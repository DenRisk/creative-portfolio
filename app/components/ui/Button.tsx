import React from 'react';
import clsx from "clsx";
import {ButtonComponentModel} from '@/app/models/button'

function Button({children, variant = "primary", onClick}: ButtonComponentModel) {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 leading-[1.25] min-w-32 cursor-pointer";
    const variants = {
        primary: "text-neutral-0 bg-gradient-to-b from-accent-primary to-accent-secondary",
        secondary: "text-neutral-0 bg-transparent border-1 border-accent-primary",
        link: "text-neutral-50 bg-transparent hover:text-neutral-0"
    };

    return (
        <button onClick={onClick} className={clsx(variant == "link" ? '' : baseStyles, variants[variant])}>
            {children}
        </button>
    );
}

export default Button;