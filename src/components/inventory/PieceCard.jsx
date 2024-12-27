import { useState } from "react";

const PieceCard = (props) => {

    const [selectedPiece, setSelectedPiece] = useState(false);

    const handleMouseEnter = () => {
        setSelectedPiece(true);
    };

    const handleMouseLeave = () => {
        setSelectedPiece(false);
    };

    return (
        <div className="bg-white shadow-md rounded-md h-fit w-full hover:cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!selectedPiece && <p className="px-10 py-3 text-[#043912] text-center">{props.piece?.pieceNumber} <i className="bi bi-chevron-down ml-3"></i></p>}

            {selectedPiece &&
                <>
                    <p className="px-10 py-3 text-white text-center bg-[#09832959]">{props.piece?.pieceNumber} <i className="bi bi-chevron-down ml-3"></i></p>
                    <div className="mx-3 space-y-0 mb-2">
                        {/* <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Name: <span className="text-[#098329]">20Tn</span></p> */}
                        <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Type: <span className="text-[#098329]">{props.piece?.pieceType}</span></p>
                        <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Weight: <span className="text-[#098329]">{props.piece?.weight} KG</span></p>
                        <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Technician: <span className="text-[#098329]">{props.piece?.techDevice}</span></p>
                        {/* <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Doctor: <span className="text-[#098329]">510 Piece</span></p>
                        <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Supplier: <span className="text-[#098329]">510 Piece</span></p> */}
                        <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Batch Code: <span className="text-[#098329]">{props.piece?.batchNumber}</span></p>
                        <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Order Code: <span className="text-[#098329]">{props.piece?.orderNumber}</span></p>
                    </div>
                </>
            }
        </div>
    )
}

export default PieceCard;