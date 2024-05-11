

function Card_Power({ title, body }) {
    return (
        // <div className="card text-bg-light mb-3 h-100">
        //     <div className="card-header fw-bold">{title}</div>
        //     <div className="card-body">
        //         <div className="card-text fw-bold">{body}</div>
        //     </div>
        // </div>

        <div className="bg-white rounded-md shadow-md">
            <h6 className="border-b-2 p-2">{title}</h6>
            <p className="font-semibold mt-2 ml-2">{body}</p>
        </div>

        // <div className="bg-white shadow-md w-auto h-auto px-5 py-3 flex flex-col">
        //     <h6 className="m-1 font-medium border-b-2 p-2">{title}</h6>
        //     <p className="m-1 font-medium">{body}</p>
        // </div>
    )
}

export default Card_Power;