

function Orders() {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg min-h-screen m-2">
                <div className="flex justify-between p-2">
                    <h6 className="text-2xl font-semibold">Orders</h6>
                    <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500">Export To Excel</button>
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500">Import Order</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-[#73C088]"><i className="bi bi-plus text-white"></i> New Order</button>
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
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100"><i className="bi bi-arrow-down-short"></i> Date</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100"><i className="bi bi-arrow-down-short"></i> Active Order</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100"><i className="bi bi-arrow-down-short"></i> Closed Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders;