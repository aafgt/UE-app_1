

const PieceCard = (props) => {

    return (
        <div className="bg-white shadow-md rounded-sm h-fit w-fit">
            <h5 className="bg-[#09832959] px-16 py-3 text-white text-2xl rounded-sm text-center">{props.piece.pieceId}</h5>
            <div className="mx-3 space-y-0">
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Weight In: <span className="text-[#098329]">{props.piece.pieceWeight_In} KG</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Weight Out: <span className="text-[#098329]">{props.piece.pieceWeight_Out} KG</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Type: <span className="text-[#098329]">{props.piece.pieceType}</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Status: <span className="text-[#098329]">{props.piece.status}</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Store: <span className="text-[#098329]">{props.piece.storeName}</span></p>
            </div>
        </div>
    )
}

export default PieceCard;