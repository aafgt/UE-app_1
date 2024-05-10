import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row">
                <div className="col">
                    <h1>Error</h1>
                </div>
                <div className="col">
                    <Link to="/" className="btn btn-dark">GO TO HOME</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;