import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { ResumePage } from "./pages/ResumePage";
import { FindTime } from "./pages/FindTime";
import { ResourcesPage } from "./pages/ResourcesPage";
import { Calendar } from "./pages/Calendar";
import { SendMoney } from "./pages/SendMoney";
import { Artwork } from "./pages/Artwork";

export const ReactRoutes = {
    "/clock": { component: <Clock />, title: "Clock" },
    "/black": { component: <BlackPage />, title: "Black Page" },
    "/resume": {
        component: <ResumePage />,
        title: "Resume | Ethan Goh"
    },
    "/find-time": {
        component: <FindTime />,
        title: "Find Time | Ethan Goh"
    },
    "/ls": {
        component: <ResourcesPage />,
        title: "Available Resources | Ethan Goh"
    },
    "/cal": {
        component: <Calendar />,
        title: "Calendar | Ethan Goh"
    },
    "/send-money": {
        component: <SendMoney />,
        title: "Send Money | Ethan Goh"
    },
    "/art-collection": {
        component: <Artwork />,
        title: "Artwork | Ethan Goh"
    }
};

export const RedirectRoutes = {
    "/zoom":
        "https://us05web.zoom.us/j/3015463277?pwd=NXUvNzVrekJzSzRyblUxUkJoR3hqQT09",
    "/discord": "https://discord.gg/VmPNuyPN",
    "/how-it-works":
        "https://docs.google.com/document/d/1QGgCjgyL10sENRjS8uEywqrc7sY7Qs306ny_ZID4Ixw/edit?usp=sharing"
};
