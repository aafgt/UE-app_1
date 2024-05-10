

function Card_Dashboard({ title, body }) {
    return (
        <div className="card h-100">
            <div className="card-body">
                <h6 className="card-title p-1 text-primary fw-bold fs-4">
                    {title}
                </h6>
                <div className="card-text p-1 fw-bold fs-10">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Card_Dashboard;