import React from "react";

import { ContactPage } from "./pages/ContactPage";
import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";

export const ReactRoutes = {
    "/clock": () => <Clock />,
    "/contact": () => <ContactPage />,
    "/black": () => <BlackPage />,
    "/sparrow": () => <SparrowPage />
};

export const RedirectRoutes = {
    "/pc": "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ"
};
