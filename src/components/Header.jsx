import { connect } from "react-redux";
import { toggleSidebar } from "../redux/ActionCreators";
import "../styles/Header.css";

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: () => { dispatch(toggleSidebar()) }
})

function Header(props) {

    const handleSidebarToggle = () => {
        props.toggleSidebar();
    };

    return (
        // <nav class="navbar navbar-expand-sm main_Header">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Link</a>
        //                 </li>
        //             </ul>
        //             <form class="d-flex" role="search">
        //                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button class="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>

        // <nav className="main_Header navbar navbar-expand-sm sticky-top border border-bottom">
        //     <div className="container-fluid mx-3">
        //         <a to="/" className="navbar-brand text-white">
        //             <img src="./vite.svg" alt="vite" />
        //             iShop
        //         </a>
        //         <div className="nav navbar-nav">
        //             <a to="/" className="nav-link text-white">Home</a>
        //             <a to="/shop" className="nav-link text-white">Shop</a>
        //         </div>
        //     </div>
        // </nav>

        // <>
        //     <div className="container-fluid bg-primary">
        //         <div className="row">
        //             <img src="/vite.svg" alt="" className="col" width="30" height="50" />
        //             <p className="col h-100">1</p>
        //             <p className="col h-100">1</p>
        //             <input type="search" placeholder="Search" className="col h-100 form-control" />
        //             <p className="col h-100">1</p>
        //             <p className="col h-100">1</p>
        //         </div>
        //     </div>
        // </>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary size_Header">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="#">
                    <img src="/vite.svg" alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={handleSidebarToggle}>
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <i className="bi bi-lock-fill"></i>
                            </a>
                        </li>
                    </ul>

                    <form className="d-flex flex-grow-1 mx-5" role="search">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-dark text-white bg-dark" type="submit" id="button-addon2">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <i className="bi bi-gear-fill"></i>
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle">Ahmed</i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">
                                    <i className="bi bi-person"></i>
                                    <span className="mx-2">Acount Center</span>
                                </a></li>
                                <li><a className="dropdown-item" href="#">
                                    <i className="bi bi-gear"></i>
                                    <span className="mx-2">Account Settings</span>
                                </a></li>
                                <li><a className="dropdown-item" href="#">
                                    <i className="bi bi-x-circle"></i>
                                    <span className="mx-2">Trigger Error</span>
                                </a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span className="mx-2">Logout</span>
                                </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default connect(null, mapDispatchToProps)(Header);