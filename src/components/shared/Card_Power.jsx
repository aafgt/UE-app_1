

function Card_Power({ title, body }) {
    return (
        <div className="card text-bg-light mb-3 h-100">
            <div className="card-header fw-bold">{title}</div>
            <div className="card-body">
                <div className="card-text fw-bold">{body}</div>
            </div>
        </div>
    )
}

export default Card_Power;