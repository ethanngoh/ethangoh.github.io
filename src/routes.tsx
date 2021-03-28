import React from "react";

import { ContactPage } from "./pages/ContactPage";
import { IndexPage } from "./pages/IndexPage";
import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";

export const ReactRoutes = {
    "/clock": () => <Clock />,
    "/contact": () => <ContactPage />,
    "/black": () => <BlackPage />,
    "/": () => <IndexPage />
};

export const RedirectRoutes = {
    "/pc": "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ"
};
