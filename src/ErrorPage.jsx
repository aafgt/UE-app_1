import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen bg-slate-100">
            <h1 className="text-9xl font-bold">Error</h1>
            <Link to="/" className="bg-slate-900 text-white text-center text-3xl rounded-lg px-5 py-3 m-5">GO TO HOME</Link>
        </div>
    )
}

export default ErrorPage;