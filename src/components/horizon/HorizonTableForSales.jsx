

const HorizonTableForSales = (props) => {

    return (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto m-3">
            <table className="w-full min-w-max text-center">
                <thead className="bg-gray-100 text-green-700">
                    <tr>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Order Id</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Batch</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Number Of Cow/Pieces</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Start Date</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">End Date</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Order Type</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Client</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Total Weight</th>
                    </tr>
                </thead>
                <tbody>
                        {props.tableData && props.tableData?.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{row.orderId}</td>
                                <td className="border border-gray-300 px-4 py-2 text-green-400 hover:cursor-pointer" onClick={() => {  }}>{row.batch}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.numberOfCowOrPieces}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.startDate}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.endDate}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.orderType}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.customer}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.totalWeight}</td>
                            </tr>
                         ))}
                </tbody>
            </table>
        </div>
    )
}

export default HorizonTableForSales;