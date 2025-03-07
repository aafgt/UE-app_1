

const HorizonTableForSales = (props) => {

    const exportToCSV = () => {
        const fields = Object.keys(props.tableData[0]);

        // Convert the data to CSV format
        const csv = [
            '\uFEFF', // Add BOM to ensure correct encoding
            fields.join(','), // Add header row
            ...props.tableData.map(row => fields.map(field => JSON.stringify(row[field], replacer)).join(',')) // Add data rows
        ].join('\r\n');

        // Create a Blob and download it as a CSV file
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `report - ${handleReportDate()}.csv`;
        link.click();
    };

    function replacer(key, value) {
        return value === null ? '' : value;
    }

    const handleReportDate = () => {
        if (props.date) {
            return props.date;
        }
        else {
            const today = new Date();
            const month = today.getMonth() + 1; // Months are zero-based, so add 1
            const day = today.getDate();
            const year = today.getFullYear();
            const formattedDate = `${month}-${day}-${year}`;

            return formattedDate;
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto m-3">
            <div className="flex justify-end my-2">
                <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-[#043912] font-semibold bg-white" onClick={exportToCSV}>Export To Excel</button>
            </div>

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
                            <td className="border border-gray-300 px-4 py-2 text-green-400 hover:cursor-pointer" onClick={() => { }}>{row.batch}</td>
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