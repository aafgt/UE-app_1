

const CowCard = (props) => {

    return (
        <div className="bg-white shadow-md rounded-sm h-fit w-fit hover:cursor-pointer">
            <h5 className="bg-[#09832959] px-16 py-3 text-white text-2xl rounded-sm text-center">{props.cow.cowsId}</h5>
            <div className="mx-3 space-y-0">
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Weight: <span className="text-[#098329]">{props.cow.cow_Weight} KG</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Type: <span className="text-[#098329]">{props.cow.cowType}</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Tech: <span className="text-[#098329]">{props.cow.tech}</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Doctor: <span className="text-[#098329]">{props.cow.doctor}</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Batch Code: <span className="text-[#098329]">{props.cow.batch}</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Order Code: <span className="text-[#098329]">{props.cow.order}</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Date: <span className="text-[#098329]">{props.cow.create_At_Divece1}</span></p>
            </div>
        </div>
    )
}

export default CowCard;