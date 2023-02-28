import { Refine } from "@pankod/refine-core";
import { Layout } from "@pankod/refine-antd";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6/legacy";
import "@pankod/refine-antd/dist/reset.css";

import { CalendarPage } from "pages/calendar";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <Refine
            legacyRouterProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            resources={[
                {
                    name: "events",
                    list: CalendarPage,
                },
            ]}
            Layout={Layout}
        />
    );
};

export default App;
