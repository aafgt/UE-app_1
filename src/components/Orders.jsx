import { useEffect, useState } from "react";
// import { ORDERS } from "../Data/orders";
import NewPieceModal from "./orders/NewPieceModal";
import NewOrderModal1 from "./orders/NewOrderModal1";

import { SERVER_URL } from "../MetaData";
import PrintModal from "./orders/PrintModal";
import DatePickerCard from "./horizon/DatePickerCard";

function OrderRow({ order }) {

    const [subTableOpen, setSubTableOpen] = useState(false);

    const toggleSubTable = () => {
        setSubTableOpen(prev => !prev);
    };

    const [togglePrintModal, setTogglePrintModal] = useState(false);
    const handleTogglePrintModal = () => {
        setTogglePrintModal(prev => !prev);
    };

    const subTableRows2 = () => {
        return (
            <>
                <div className="border-l-4 border-green-800 w-full">
                    {order.batches && order.batches?.map((row, index) => (
                        <div key={index} className="border-b-2 w-full flex">
                            {/* <div className="bg-black border border-green-400 ml-[31px] my-1 w-28 h-16 flex justify-center items-center">
                                <img src="/vite.svg" alt="" />
                            </div> */}
                            <div className="flex items-center justify-center">
                                <button type="button" className="text-xl ml-3" onClick={handleTogglePrintModal}><i className="bi bi-printer"></i> <i className="bi bi-shield-check"></i></button>
                            </div>
                            <table className="w-full text-center text-green-700">
                                <thead className="mb-7">
                                    <tr>
                                        <th className="px-5">Batch</th>
                                        <th className="px-5">No. Of Cows/Pieces</th>
                                        <th className="px-5">Type</th>
                                        <th className="px-5">Start Date</th>
                                        <th className="px-5">End Date</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[20px] font-semibold">
                                    <tr>
                                        <td>{row.batchNumber}</td>
                                        <td>{row.count}</td>
                                        <td>{row.batchType}</td>
                                        <td>{row.startDate}</td>
                                        <td>{row.endDate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>

                {togglePrintModal && <PrintModal order={order} handleTogglePrintModal={handleTogglePrintModal} />}
            </>
        )
    };

    return (
        <>
            <tr className="border-b-2 hover:cursor-pointer" onClick={toggleSubTable}>
                <td className="py-3 border border-x-2 text-green-500">{order.orderNumber}</td>
                <td className="py-3 border border-x-2">{order.totalCount}</td>
                <td className="py-3 border border-x-2">{order.customer ? order.customer : "-----"}</td>
                <td className="py-3 border border-x-2">{order.orderType}</td>
                <td className="py-3 border border-x-2">{order.createDate}</td>
                <td className="py-3 border border-x-2">{order.deliverDate ? order.deliverDate : "-----"}</td>
                <td className="py-3 border border-x-2">{order.startDate ? order.startDate : "-----"}</td>
                <td className="py-3 border border-x-2">
                    <div className="flex justify-center">
                        {order.status === "Pending" && <div className="bg-yellow-400 rounded-xl w-fit px-2">
                            <i className="bi bi-dot text-yellow-600"></i> <span className="text-white text-sm">{order.status}</span>
                        </div>}
                        {order.status === "Running" && <div className="bg-orange-400 rounded-xl w-fit px-2">
                            <i className="bi bi-dot text-orange-600"></i> <span className="text-white text-sm">{order.status}</span>
                        </div>}
                        {order.status === "Success" && <div className="bg-green-400 rounded-xl w-fit px-2">
                            <i className="bi bi-dot text-green-600"></i> <span className="text-white text-sm">{order.status}</span>
                        </div>}
                    </div>
                </td>
                <td className="py-3 border border-x-2">{order.approve}</td>
                {/* <td className="bg-slate-200 rounded-full"><i className="bi bi-arrow-down-short"></i></td> */}
            </tr>
            {subTableOpen && <tr>
                <td colSpan={9}>
                    {subTableRows2()}
                </td>
            </tr>}
        </>
    );
};

function Orders() {

    const handleExportToExcelCSV2 = () => {
        let csv = "";

        const headers = Object.keys(orders[0]);
        csv += headers.join(",") + "\n";

        orders.forEach(element => {
            const values = headers.map(header => element[header]);
            csv += values.join(",") + "\n";
        });

        //alert(csv);

        const blob = new Blob(['\uFEFF', csv], { type: "text/csv" });
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

    const [toggleNewPieceModal, setToggleNewPieceModal] = useState(false);
    const handleToggleNewPieceModal = () => {
        setToggleNewPieceModal(prev => !prev);
    };

    const [search, setSearch] = useState("");
    const handleSearchKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (approvedOrdersSelected) {
                fetchOrders();
            }
            else {
                fetchAllOrders();
            }

            if (orderTypeFilter !== "") {
                setFilteredOrders(orders.filter((order) => (order.orderType === orderTypeFilter)));
            }
        }
    };

    const [orders, setOrders] = useState([]);
    const fetchOrders = async () => {
        const response = await fetch(SERVER_URL + `/api/Front/GetAllOrdersWithApprove?orderCode=${search}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setOrders(data);
    };

    const [orderTypeFilter, setOrderTypeFilter] = useState("");
    const [filteredOrders, setFilteredOrders] = useState([]);
    const handleOrderTypeFilter = () => {
        setFilteredOrders(orders.filter((order) => (order.orderType === orderTypeFilter)));
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        handleOrderTypeFilter();
    }, [orderTypeFilter]);

    const handleExportToExcelCSV = () => {
        // Flatten the data
        // const flattenedData = orders?.map(item => {
        //     return item.batches.map(batch => {
        //         return batch.numbers.map(number => ({
        //             ...item,      // spreading the root-level properties
        //             ...batch,     // spreading the batch-level properties
        //             ...number,    // spreading the number-level properties
        //         }));
        //     }).flat(); // flatten the numbers array from the batches
        // }).flat(); // flatten the batches array from the root-level data
        const flattenedData = orders?.map(item => {
            return item.batches.map(batch => {
                return batch.numbers.map(number => ({
                    "orderNumber": item.orderNumber,
                    "totalCount": item.totalCount,
                    "customer": item.customer,
                    "orderType": item.orderType,
                    "createDate": item.createDate,
                    "deliverDate": item.deliverDate,
                    "startDate": item.startDate,
                    "status": item.status,
                    "approve": item.approve,
                    "batchNumber": batch.batchNumber,
                    "batchCount": batch.count,
                    "batchType": batch.batchType,
                    "batchStartDate": batch.startDate,
                    "batchEndDate": batch.endDate,
                    "number": number.number,
                    "weights": number.weights,
                    "numberType": number.type,
                    "doctorId": number.doctorId,
                    "technician": number.technician
                }));
            }).flat(); // flatten the numbers array
        }).flat(); // flatten the batches array                

        const fields = Object.keys(flattenedData[0]);

        // Convert the data to CSV format
        const csv = [
            '\uFEFF', // Add BOM to ensure correct encoding
            fields.join(','), // Add header row
            ...flattenedData.map(row => fields.map(field => JSON.stringify(row[field], replacer)).join(',')) // Add data rows
        ].join('\r\n');

        // Create a Blob and download it as a CSV file
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `orders - ${handleReportDate()}.csv`;
        link.click();
    };

    function replacer(key, value) {
        return value === null ? '' : value;
    }

    const handleReportDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();
        const year = today.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;

        return formattedDate;
    }

    const [graphDate, setGraphDate] = useState("");
    const [date, setDate] = useState((new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + new Date().getDate().toString().padStart(2, '0') + '-' + new Date().getFullYear());

    const changeDateSlashToDash = (date) => {
        let dateObj = new Date(date);

        let formattedNewDate = (dateObj.getMonth() + 1).toString().padStart(2, '0') + '-' +
            dateObj.getDate().toString().padStart(2, '0') + '-' +
            dateObj.getFullYear();

        return formattedNewDate;
    }

    const [importOrdersModalOpen, setImportOrdersModalOpen] = useState(false);
    const [importOrdersDate, setImportOrdersDate] = useState((new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + new Date().getDate().toString().padStart(2, '0') + '-' + new Date().getFullYear());
    const importOrders = async () => {
        if (!importOrdersDate) {
            setImportOrdersDate((new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + new Date().getDate().toString().padStart(2, '0') + '-' + new Date().getFullYear());
        }

        const response = await fetch(SERVER_URL + "/api/Front/ProcessWorkOrderAndCreateOrder", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "companyId": "003",
                "transDate": importOrdersDate
            })
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            alert("An error has occured. Please try again later.");
            throw new Error(message);
        }

        // const data = await response.json();
        alert("Orders imported successfully.");
        setImportOrdersModalOpen(prev => !prev);
    };


    const [approvedOrdersSelected, setApprovedOrdersSelected] = useState(true);

    const fetchAllOrders = async () => {
        const response = await fetch(SERVER_URL + `/api/Front/GetAllOrders?orderCode=${search}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setOrders(data);
    };

    useEffect(() => {
        if (approvedOrdersSelected) {
            fetchOrders();
        }
        else {
            fetchAllOrders();
        }
    }, [approvedOrdersSelected]);


    return (
        <>
            <div className="bg-white shadow-md rounded-lg min-h-screen m-2">
                <div className="flex justify-between p-2">
                    <h6 className="text-2xl font-semibold">Orders</h6>
                    <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500" onClick={handleExportToExcelCSV}>Export To Excel</button>
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500" onClick={handleToggleNewPieceModal}>New Piece</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-[#73C088] text-white" onClick={handleToggleNewOrderModal}><i className="bi bi-plus text-white"></i> New Order</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-[#73C088] text-white" onClick={() => { setImportOrdersModalOpen(prev => !prev); }}><i className="bi bi-arrow-down-short text-white"></i> Import Orders</button>
                    </div>
                </div>

                <div className="flex justify-between mx-3">
                    <DatePickerCard setDate={setDate} setGraphDate={setGraphDate} />
                    <div>
                        <input type="checkbox" checked={approvedOrdersSelected} onChange={() => { setApprovedOrdersSelected(prev => !prev); }} />
                        <label className="ml-1">Approved Orders</label>
                    </div>
                </div>

                <div className="flex justify-between p-2 mt-7">
                    <div className="relative bg-slate-100">
                        <input className="pl-10 pr-4 py-2 border rounded-lg" type="text" placeholder="Search, Order ID" onChange={(e) => { setSearch(e.target.value); }} onKeyDown={handleSearchKeyDown} />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="bi bi-search text-gray-400"></i>
                        </div>
                    </div>
                    {/* <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Date <i className="bi bi-calendar3"></i></button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Active Order</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Closed Order</button>
                    </div> */}

                    <div className="mr-3 space-x-5 flex justify-end">
                        <div className="flex items-center justify-center text-green-600 text-2xl"><i className="bi bi-filter"></i></div>
                        <button className={`border-2 px-3 py-1 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${orderTypeFilter === "ذبح" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setOrderTypeFilter("ذبح"); }}>ذبح</button>
                        <button className={`border-2 px-3 py-1 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${orderTypeFilter === "تشافي" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setOrderTypeFilter("تشافي"); }}>تشافي</button>
                        <button className={`border-2 px-3 py-1 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${orderTypeFilter === "بيع لحم بعضم" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setOrderTypeFilter("بيع لحم بعضم"); }}>بيع لحم بعضم</button>
                        <button className={`border-2 px-3 py-1 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${orderTypeFilter === "بيع لحم مشفي" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setOrderTypeFilter("بيع لحم مشفي"); }}>بيع لحم مشفي</button>
                    </div>
                </div>

                {/* <div className="mr-3 space-x-5 flex justify-end">
                    <div className="flex items-center justify-center text-green-600 text-2xl"><i className="bi bi-filter"></i></div>
                    <button className={`border-2 px-3 py-1 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${orderTypeFilter === "ذبح" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setOrderTypeFilter("ذبح"); }}>ذبح</button>
                    <button className={`border-2 px-3 py-1 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${orderTypeFilter === "تشافي" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setOrderTypeFilter("تشافي"); }}>تشافي</button>
                    <button className={`border-2 px-3 py-1 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${orderTypeFilter === "بيع لحم بعضم" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setOrderTypeFilter("بيع لحم بعضم"); }}>بيع لحم بعضم</button>
                    <button className={`border-2 px-3 py-1 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${orderTypeFilter === "بيع لحم مشفي" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setOrderTypeFilter("بيع لحم مشفي"); }}>بيع لحم مشفي</button>
                </div> */}

                <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                    <div className="p-3">
                        <table className="w-full text-center text-green-700 font-semibold">
                            <thead className="text-[20px] font-extralight bg-green-50">
                                <tr>
                                    <th className="px-5 border border-x-2">Order ID</th>
                                    <th className="px-5 border border-x-2">No. Of Cows/Pieces</th>
                                    <th className="px-5 border border-x-2">Customer</th>
                                    <th className="px-5 border border-x-2">Order Type</th>
                                    <th className="px-5 border border-x-2">Create Date</th>
                                    <th className="px-5 border border-x-2">Delivery Date</th>
                                    <th className="px-5 border border-x-2">Start Date</th>
                                    <th className="px-5 border border-x-2">Status</th>
                                    <th className="px-5 border border-x-2">Approved</th>
                                </tr>
                            </thead>
                            {/* <tbody className="">
                                {orderTypeFilter !== "" ? filteredOrders?.map((order, index) => (
                                    <OrderRow key={index} order={order} />
                                )) : orders?.map((order, index) => (
                                    <OrderRow key={index} order={order} />
                                ))}
                            </tbody> */}
                            <tbody className="">
                                {/* 02-18-2025 or '' */}
                                {orderTypeFilter !== "" ? filteredOrders?.map((order, index) => (
                                    date ? date === changeDateSlashToDash(order.deliverDate) ? <OrderRow key={index} order={order} /> : <></>
                                        : <OrderRow key={index} order={order} />
                                )) : orders?.map((order, index) => (
                                    date ? date === changeDateSlashToDash(order.deliverDate) ? <OrderRow key={index} order={order} /> : <></>
                                        : <OrderRow key={index} order={order} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {toggleNewOrderModal && <NewOrderModal1 handleToggleNewOrderModal={handleToggleNewOrderModal} />}
            {toggleNewPieceModal && <NewPieceModal handleToggleNewPieceModal={handleToggleNewPieceModal} />}

            {importOrdersModalOpen &&
                <div className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                    <div className="bg-white max-w-xl w-full rounded-md overflow-y-auto h-96">
                        <div className="p-3 flex items-center justify-between">
                            <h3 className="font-semibold text-xl text-green-600">Import Orders</h3>
                            <span className="modal-close cursor-pointer" onClick={() => { setImportOrdersModalOpen(prev => !prev); }}>×</span>
                        </div>

                        <DatePickerCard setDate={setImportOrdersDate} setGraphDate={setGraphDate} />

                        <div className="p-3 flex items-center justify-end">
                            <div>
                                <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-white font-semibold bg-[#73C088] h-fit" onClick={importOrders}>Import {importOrdersDate || "Today"}</button>
                                <button className="modal-close text-sm text-gray-400 border rounded-md px-4 py-2" onClick={() => { setImportOrdersModalOpen(prev => !prev); }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* <audio controls>
                <source src="/sample3.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
            </audio> */}
        </>
    )
}

export default Orders;