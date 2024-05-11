

function Card_Dashboard({ title, body }) {
    return (
        <div className="bg-white shadow-md w-auto h-auto px-5 py-3 flex flex-col">
            <h6 className="m-1 text-2xl text-blue-700">{title}</h6>
            <p className="m-1 font-medium">{body}</p>
        </div>
    )
}

export default Card_Dashboard;