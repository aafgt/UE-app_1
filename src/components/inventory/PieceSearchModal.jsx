import { useEffect, useState } from "react";

const PieceSearchModal = (props) => {

    const [filteredPieces, setFilteredPieces] = useState([]);
    const filterPieces = () => {
        if (props.search) {
            setFilteredPieces(
                props.allPieces.filter((piece) => {
                    if (piece.pieceNumber.includes(props.search)) {
                        return piece;
                    }
                })
            );
        }
    };

    useEffect(() => {
        filterPieces();
    }, [props.search]);

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto z-20">
                <div className="bg-white max-w-xl w-full h-96 rounded-md">
                    <div className="p-3 flex items-center justify-between">
                        <h3 className="font-semibold text-xl text-[#043912]">Pieces Found ({filteredPieces?.length})</h3>
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleModal}>×</span>
                    </div>

                    <div className="flex justify-around">
                        <p className="text-[#043912]">Piece ID - Type - Weight - Technician - Batch Code - Order Code - Store</p>
                        {/* <p className="text-[#043912]">Type</p>
                        <p className="text-[#043912]">Weight</p>
                        <p className="text-[#043912]">Technician</p>
                        <p className="text-[#043912]">Batch Code</p>
                        <p className="text-[#043912]">Order Code</p>
                        <p className="text-[#043912]">Store</p> */}
                    </div>
                    <div className="m-5 h-64 overflow-auto space-y-5">
                        {filteredPieces.map((piece, index) => (
                            <div key={index} className="flex justify-between text-center border border-green-500 bg-green-50 rounded-md">
                                <p className="text-[#043912]">{piece.pieceNumber}</p>
                                <p>-</p>
                                <p className="text-[#043912]">{piece.pieceType}</p>
                                <p>-</p>
                                <p className="text-[#043912]">{piece.weight} KG</p>
                                <p>-</p>
                                <p className="text-[#043912]">{piece.techDevice}</p>
                                <p>-</p>
                                <p className="text-[#043912]">{piece.batchNumber}</p>
                                <p>-</p>
                                <p className="text-[#043912]">{piece.orderNumber}</p>
                                <p>-</p>
                                <p className="text-[#043912]">{piece.store}</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className="overflow-x-auto w-full h-72 mx-4">
                        <table className="w-full text-center table-fixed">
                            <thead className="">
                                <tr>
                                    <th className="bg-gray-100 text-green-700 z-20 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">Piece ID</th>
                                    <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">Type</th>
                                    <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">Weight</th>
                                    <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">Technician</th>
                                    <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-24">Batch Code</th>
                                    <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-24">Order Code</th>
                                    <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">Store</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPieces.map((piece, index) => (
                                    <tr key={index}>
                                        <td className="sticky left-0 border border-gray-300 px-4 py-2 bg-green-50">{piece.pieceNumber}</td>
                                        <td className="border border-gray-300 px-4 py-2">{piece.pieceType}</td>
                                        <td className="border border-gray-300 px-4 py-2">{piece.weight} KG</td>
                                        <td className="border border-gray-300 px-4 py-2">{piece.techDevice}</td>
                                        <td className="border border-gray-300 px-4 py-2">{piece.batchNumber}</td>
                                        <td className="border border-gray-300 px-4 py-2">{piece.orderNumber}</td>
                                        <td className="border border-gray-300 px-4 py-2">{piece.store}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default PieceSearchModal;