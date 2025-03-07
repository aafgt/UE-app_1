import App from "./App";
import ErrorPage from "./ErrorPage";
// import Admin from "./components/Admin";
import Client from "./components/Client";
// import Dashboard from "./components/Dashboard";
import Horizon from "./components/Horizon";
import Inventory from "./components/Inventory";
import Orders from "./components/Orders";
import Report from "./components/Report";
// import SpeciesOfCows from "./components/SpeciesOfCows";
// import Reports from "./components/Reports";
// import SupplyChain from "./components/SupplyChain";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,  // This sets this route as the default for "/"
                element: <Horizon />
            },
            // {
            //     path: "/dashboard",
            //     element: <Dashboard />
            // },
            // {
            //     path: "/supplyChain",
            //     element: <SupplyChain />
            // },
            {
                path: "/dashboard",
                element: <Horizon />
            },
            {
                path: "/orders",
                element: <Orders />
            },
            // {
            //     path: "/speciesOfCows",
            //     element: <SpeciesOfCows />
            // },
            {
                path: "/client",
                element: <Client />
            },
            {
                path: "/inventory",
                element: <Inventory />
            },
            // {
            //     path: "/admin",
            //     element: <Admin />
            // },
            {
                path: "/report",
                element: <Report />
            }
            // {
            //     path: "/reports",
            //     element: <Reports />
            // }
        ]
    }
];

export default routes;