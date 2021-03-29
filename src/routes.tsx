import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";

export const ReactRoutes = {
    "/clock": { component: <Clock />, title: "Clock" },
    "/black": { component: <BlackPage />, title: "Black Page" },
    "/sparrow": { component: <SparrowPage />, title: "JACK SPARROW" }
};

export const RedirectRoutes = {
    "/pc": "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ"
};
