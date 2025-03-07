

const HorizonTableForCutting = (props) => {

    const exportToCSV = () => {
        // Define the fields
        const fields = Object.keys(props.tableData[0]);

        // Convert the data to CSV format
        const csv = [
            '\uFEFF', // Add BOM to ensure correct encoding
            fields.join(','), // Add header row
            ...props.tableData?.map(row => fields.map(field => JSON.stringify(row[field], replacer)).join(',')) // Add data rows
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


    const calculateTotalWeightIn = () => {
        return props.tableData?.reduce((sum, row) => {
            return sum + row.pieceWeight_In;
        }, 0);
    };
    const calculateTotalWeightOut = () => {
        return props.tableData?.reduce((sum, row) => {
            return sum + row.pieceWeight_Out;
        }, 0);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto m-3">
            <div className="flex justify-end my-2">
                <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-[#043912] font-semibold bg-white" onClick={exportToCSV}>Export To Excel</button>
            </div>

            <div className="h-[30rem] overflow-auto">
                <table className="w-full min-w-max text-center">
                    <thead className="">
                        <tr>
                            <th className="border border-gray-300 border-b-4 px-4 py-6 sticky top-0 bg-gray-100 text-green-700">Order Id</th>
                            <th className="border border-gray-300 border-b-4 px-4 py-6 sticky top-0 bg-gray-100 text-green-700">Batch</th>
                            <th className="border border-gray-300 border-b-4 px-4 py-6 sticky top-0 bg-gray-100 text-green-700">Piece Id</th>
                            <th className="border border-gray-300 border-b-4 px-4 py-6 sticky top-0 bg-gray-100 text-green-700">Type</th>
                            <th className="border border-gray-300 border-b-4 px-4 py-6 sticky top-0 bg-gray-100 text-green-700">Weight In</th>
                            <th className="border border-gray-300 border-b-4 px-4 py-6 sticky top-0 bg-gray-100 text-green-700">Weight Out</th>
                            <th className="border border-gray-300 border-b-4 px-4 py-6 sticky top-0 bg-gray-100 text-green-700">Technician</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tableData && props.tableData?.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{row.orderCode}</td>
                                <td className="border border-gray-300 px-4 py-2 text-green-400 hover:cursor-pointer" onClick={() => { }}>{row.batchCode}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.pieceId}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.pieceTybe}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.pieceWeight_In}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.pieceWeight_Out}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.machien_Id_Device3}</td>
                            </tr>
                        ))}

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="border-4 border-gray-300 px-4 py-2 text-xl">
                                <p className="text-sm">Total Weight In</p>
                                {calculateTotalWeightIn()?.toFixed(2)} KG
                            </td>
                            <td className="border-4 border-gray-300 px-4 py-2 text-xl">
                                <p className="text-sm">Total Weight Out</p>
                                {calculateTotalWeightOut()?.toFixed(2)} KG
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <div className="flex justify-around">
                <p>Total Weight In: <span className="text-xl">{calculateTotalWeightIn().toFixed(2)}</span> KG</p>
                <p>Total Weight Out: <span className="text-xl">{calculateTotalWeightOut().toFixed(2)}</span> KG</p>
            </div> */}
        </div>
    )
}

export default HorizonTableForCutting;