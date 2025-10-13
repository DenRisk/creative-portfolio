export type ButtonComponentModel = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "link";
}

export type ButtonLinkComponentModel = {
    children: React.ReactNode;
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    variant?: "primary" | "secondary" | "link";
}