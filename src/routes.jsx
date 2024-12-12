import App from "./App";
import ErrorPage from "./ErrorPage";
import Client from "./components/Client";
import Dashboard from "./components/Dashboard";
import Horizon from "./components/Horizon";
import Orders from "./components/Orders";
import SpeciesOfCows from "./components/SpeciesOfCows";
// import Reports from "./components/Reports";
import SupplyChain from "./components/SupplyChain";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/supplyChain",
                element: <SupplyChain />
            },
            {
                path: "/orders",
                element: <Orders />
            },
            {
                path: "/speciesOfCows",
                element: <SpeciesOfCows />
            },
            {
                path: "/horizon",
                element: <Horizon />
            },
            {
                path: "/client",
                element: <Client />
            }
            // {
            //     path: "/reports",
            //     element: <Reports />
            // }
        ]
    }
];

export default routes;