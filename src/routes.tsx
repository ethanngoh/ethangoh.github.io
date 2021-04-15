import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";
import { ResumePage } from "./pages/ResumePage";
import { FindTime } from "./pages/FindTime";
import { ResourcesPage } from "./pages/ResourcesPage";
import { Calendar } from "./pages/Calendar";

export const ReactRoutes = {
    "/clock": { component: <Clock />, title: "Clock" },
    "/black": { component: <BlackPage />, title: "Black Page" },
    "/sparrow": { component: <SparrowPage />, title: "JACK SPARROW" },
    "/resume": {
        component: <ResumePage />,
        title: "Resume | Chris Bentivenga"
    },
    "/find-time": {
        component: <FindTime />,
        title: "Find Time | Chris Bentivenga"
    },
    "/ls": {
        component: <ResourcesPage />,
        title: "Available Resources | Chris Bentivenga"
    },
    "/cal": {
        component: <Calendar />,
        title: "Calendar | Chris Bentivenga"
    }
};

export const RedirectRoutes = {
    "/pc": "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ",
    "/zoom":
        "https://us04web.zoom.us/j/4894814721?pwd=T05md1JJaUFGNG9oZ09vRHJ3RlQ5QT09",
    "/how-it-works":
        "https://docs.google.com/document/d/1QGgCjgyL10sENRjS8uEywqrc7sY7Qs306ny_ZID4Ixw/edit?usp=sharing"
};
