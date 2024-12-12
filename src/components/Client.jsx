import { useState } from "react";
import { ORDERS } from "../Data/orders";
import NewOrderModal from "./orders/NewOrderModal";

function Client() {

    const handleExportToExcelCSV = () => {
        let csv = "";

        const headers = Object.keys(ORDERS[0]);
        csv += headers.join(",") + "\n";

        ORDERS.forEach(element => {
            const values = headers.map(header => element[header]);
            csv += values.join(",") + "\n";
        });

        //alert(csv);

        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.download = "orders.csv";
        link.href = url;
        link.click();
    };

    const [toggleNewOrderModal, setToggleNewOrderModal] = useState(false);
    const handleToggleNewOrderModal = () => {
        setToggleNewOrderModal(prev => !prev);
    };

    return (
        <>
            <div className="bg-white shadow-md rounded-lg min-h-screen m-2">
                <div className="flex justify-between p-2">
                    <h6 className="text-2xl font-semibold">Orders</h6>
                    <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500" onClick={handleExportToExcelCSV}>Export To Excel</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-[#73C088]" onClick={handleToggleNewOrderModal}><i className="bi bi-plus text-white"></i> New Client</button>
                    </div>
                </div>

                <div className="flex justify-between p-2 mt-7">
                    <div className="relative bg-slate-100">
                        <input className="pl-10 pr-4 py-2 border rounded-lg" type="text" placeholder="Search, Order ID" />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="bi bi-search text-gray-400"></i>
                        </div>
                    </div>
                    <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Date <i className="bi bi-arrow-down-short"></i></button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Active Client</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">All Client</button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-x-auto m-3">
                    <table className="w-full min-w-max text-center">
                        <thead className="bg-gray-100 text-green-700">
                            <tr>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Client</th>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Code</th>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Last Order</th>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Active Order</th>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Total Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2"></td>
                                <td className="border border-gray-300 px-4 py-2"></td>
                                <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">Quantity</span>Date</td>
                                <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">Quantity</span><span className="border-r-2 mx-2 pr-2">Date</span>Delivery Date</td>
                                <td className="border border-gray-300 px-4 py-2"></td>
                            </tr>

                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Ahmed Yzn</td>
                                <td className="border border-gray-300 px-4 py-2">#101</td>
                                <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">20Tn</span>2/8/2024</td>
                                <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">20Tn</span><span className="border-r-2 mx-2 pr-2">2/8/2024</span>2/8/2024</td>
                                <td className="border border-gray-300 px-4 py-2">20Tn</td>
                            </tr>

                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Ahmed Yzn</td>
                                <td className="border border-gray-300 px-4 py-2">#101</td>
                                <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">20Tn</span>2/8/2024</td>
                                <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">20Tn</span><span className="border-r-2 mx-2 pr-2">2/8/2024</span>2/8/2024</td>
                                <td className="border border-gray-300 px-4 py-2">20Tn</td>
                            </tr>

                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Ahmed Yzn</td>
                                <td className="border border-gray-300 px-4 py-2">#101</td>
                                <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">20Tn</span>2/8/2024</td>
                                <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">20Tn</span><span className="border-r-2 mx-2 pr-2">2/8/2024</span>2/8/2024</td>
                                <td className="border border-gray-300 px-4 py-2">20Tn</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {toggleNewOrderModal && <NewOrderModal handleToggleNewOrderModal={handleToggleNewOrderModal} />}
        </>
    )
}

export default Client;