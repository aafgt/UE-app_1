

const HorizonTable = (props) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto m-3">
            <table className="w-full min-w-max text-center">
                <thead className="bg-gray-100 text-green-700">
                    <tr>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Order Id</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Batch</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Number Of Cow</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Start Date</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">End Date</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Type Cows</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Waste</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Miscarriage</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Performance</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Grade</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Total Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 text-green-400 hover:cursor-pointer" onClick={() => { props.handleToggleModal2(); }}>#101</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                        <td className="border border-gray-300 px-4 py-2">20000Tn</td>
                        <td className="border border-gray-300 px-4 py-2">22/18/2024</td>
                        <td className="border border-gray-300 px-4 py-2">22/18/2024</td>
                        <td className="border border-gray-300 px-4 py-2">Brazilian</td>
                        <td className="border border-gray-300 px-4 py-2">2Tn</td>
                        <td className="border border-gray-300 px-4 py-2">2Tn</td>
                        <td className="border border-gray-300 px-4 py-2">60%</td>
                        <td className="border border-gray-300 px-4 py-2">A</td>
                        <td className="border border-gray-300 px-4 py-2">100 Tn</td>
                    </tr>

                    <tr>
                        <td className="border border-gray-300 px-4 py-2 text-green-400 hover:cursor-pointer" onClick={() => { }}>#101</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                        <td className="border border-gray-300 px-4 py-2">20000Tn</td>
                        <td className="border border-gray-300 px-4 py-2">22/18/2024</td>
                        <td className="border border-gray-300 px-4 py-2">22/18/2024</td>
                        <td className="border border-gray-300 px-4 py-2">Brazilian</td>
                        <td className="border border-gray-300 px-4 py-2">2Tn</td>
                        <td className="border border-gray-300 px-4 py-2">2Tn</td>
                        <td className="border border-gray-300 px-4 py-2">60%</td>
                        <td className="border border-gray-300 px-4 py-2">A</td>
                        <td className="border border-gray-300 px-4 py-2">100 Tn</td>
                    </tr>

                    <tr>
                        <td className="border border-gray-300 px-4 py-2 text-green-400 hover:cursor-pointer" onClick={() => { }}>#101</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                        <td className="border border-gray-300 px-4 py-2">20000Tn</td>
                        <td className="border border-gray-300 px-4 py-2">22/18/2024</td>
                        <td className="border border-gray-300 px-4 py-2">22/18/2024</td>
                        <td className="border border-gray-300 px-4 py-2">Brazilian</td>
                        <td className="border border-gray-300 px-4 py-2">2Tn</td>
                        <td className="border border-gray-300 px-4 py-2">2Tn</td>
                        <td className="border border-gray-300 px-4 py-2">60%</td>
                        <td className="border border-gray-300 px-4 py-2">A</td>
                        <td className="border border-gray-300 px-4 py-2">100 Tn</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HorizonTable;