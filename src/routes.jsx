import App from "./App";
import ErrorPage from "./ErrorPage";
import Ai from "./components/Ai";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Machines from "./components/Machines";
import Maintenance from "./components/Maintenance";
import Power from "./components/Power";
import SupplyChain from "./components/SupplyChain";
import Vehicles from "./components/Vehicles";

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
                path: "/maintenance",
                element: <Maintenance />
            },
            {
                path: "/power",
                element: <Power />
            },
            {
                path: "/vehicles",
                element: <Vehicles />
            },
            {
                path: "/machines",
                element: <Machines />
            },
            {
                path: "/inventory",
                element: <Inventory />
            },
            {
                path: "/supplyChain",
                element: <SupplyChain />
            },
            {
                path: "/ai",
                element: <Ai />
            }
        ]
    }
];

export default routes;