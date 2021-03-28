import { useEffect } from "react";

export const RedirectPage = ({ href }: { href: string }) => {
    useEffect(() => {
        window.location.href = href;
    });
    return null;
};
