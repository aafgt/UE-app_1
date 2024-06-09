import App from "./App";
import ErrorPage from "./ErrorPage";
import Ai from "./components/Ai";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Machines from "./components/Machines";
import Maintenance from "./components/Maintenance";
import Orders from "./components/Orders";
import Power from "./components/Power";
import Reports from "./components/Reports";
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
            // {
            //     path: "/power",
            //     element: <Power />
            // },
            // {
            //     path: "/vehicles",
            //     element: <Vehicles />
            // },
            // {
            //     path: "/machines",
            //     element: <Machines />
            // },
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
            },
            {
                path: "/orders",
                element: <Orders />
            },
            {
                path: "/reports",
                element: <Reports />
            }
        ]
    }
];

export default routes;