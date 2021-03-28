import React from "react";

import { ContactPage } from "./pages/ContactPage";
import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";

export const ReactRoutes = {
    "/clock": { component: <Clock />, title: "Clock" },
    "/contact": { component: <ContactPage />, title: "Contact" },
    "/black": { component: <BlackPage />, title: "Black Page" },
    "/sparrow": { component: <SparrowPage />, title: "JACK SPARROW" }
};

export const RedirectRoutes = {
    "/pc": "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ"
};
