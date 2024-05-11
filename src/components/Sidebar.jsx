import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ActiveSidebarTabs } from "../redux/ActionCreators";
import { useState } from "react";

const mapStateToProps = (state) => {
    return {
        isSidebarToggled: state.isSidebarToggled.isSidebarToggled,
        sidebarTabsActive: state.isSidebarToggled.sidebarTabsActive
    }
}

const mapDispatchToProps = (dispatch) => ({
    ActiveSidebarTabs: (new_isActive) => { dispatch(ActiveSidebarTabs(new_isActive)) }
})

function Sidebar(props) {

    const handleIsActive = (tab) => {
        let new_isActive = props.sidebarTabsActive.map((t, index) => {
            return index === tab ? t = "bg-slate-100 text-blue-700 border-l-2 border-blue-700 w-full" : t = "";
        })
        props.ActiveSidebarTabs(new_isActive);
    };

    // const [activeStyle, setActiveStyle] = useState("");
    // const handleIsActive2 = () => {
    //     setActiveStyle("bg-slate-100 text-blue-700 border-l-2 border-blue-700 w-full");
    // }

    return (
        // <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        //     <div class="offcanvas-header">
        //         <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
        //         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //     </div>
        //     <div class="offcanvas-body">
        //         Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
        //     </div>
        // </div>

        // <>
        //     {props.isSidebarToggled && <nav className="nav flex-column border-end bg-body-tertiary h-100">
        //         <div className="container">
        //             <div className="border-bottom">
        //                 <span className="fw-bold">Ahmed</span><br />
        //                 <span>Ahmed@corn.com</span>
        //             </div>

        //             <label className="fw-bold my-3">Main</label>
        //             <Link to="/dashboard" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
        //                 <i className="bi bi-grid"></i>
        //                 <span className="mx-2">Dashboard</span>
        //             </Link>

        //             <label className="fw-bold my-3">Pages</label>
        //             <Link to="/maintenance" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[1]}`} onClick={() => { handleIsActive(1) }}>
        //                 <i className="bi bi-nvme"></i>
        //                 <span className="mx-2">Maintenance</span>
        //             </Link>
        //             <Link to="/power" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[2]}`} onClick={() => { handleIsActive(2) }}>
        //                 <i className="bi bi-lightning"></i>
        //                 <span className="mx-2">Power</span>
        //             </Link>
        //             <Link to="/vehicles" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[3]}`} onClick={() => { handleIsActive(3) }}>
        //                 <i className="bi bi-globe2"></i>
        //                 <span className="mx-2">Vehicles</span>
        //             </Link>
        //             <Link to="/machines" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[4]}`} onClick={() => { handleIsActive(4) }}>
        //                 <i className="bi bi-speedometer2"></i>
        //                 <span className="mx-2">Machines</span>
        //             </Link>
        //             <Link to="/inventory" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[5]}`} onClick={() => { handleIsActive(5) }}>
        //                 <i className="bi bi-suitcase2"></i>
        //                 <span className="mx-2">Inventory</span>
        //             </Link>
        //             <Link to="/supplyChain" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[6]}`} onClick={() => { handleIsActive(6) }}>
        //                 <i className="bi bi-plug"></i>
        //                 <span className="mx-2">Supply-Chain</span>
        //             </Link>
        //             <Link to="/ai" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[7]}`} onClick={() => { handleIsActive(7) }}>
        //                 <i className="bi bi-cloud"></i>
        //                 <span className="mx-2">AI</span>
        //             </Link>
        //             <Link className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[8]}`} onClick={() => { handleIsActive(8) }}>
        //                 <i className="bi bi-file-earmark"></i>
        //                 <span className="mx-2">Reports</span>
        //             </Link>
        //             <Link className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[9]}`} onClick={() => { handleIsActive(9) }}>
        //                 <i className="bi bi-file-earmark-break"></i>
        //                 <span className="mx-2">Orders</span>
        //             </Link>

        //             <label className="fw-bold my-3">Live</label>
        //             <Link className={`nav-link btn btn-outline-secondary text-start text-dark ${props.sidebarTabsActive[10]}`} onClick={() => { handleIsActive(10) }}>
        //                 <i className="bi bi-funnel"></i>
        //                 <span className="mx-2">Clean Corn</span>
        //             </Link>
        //             <Link className={`nav-link btn btn-outline-secondary text-start text-dark ${props.sidebarTabsActive[11]}`} onClick={() => { handleIsActive(11) }}>
        //                 <i className="bi bi-filter"></i>
        //                 <span className="mx-2">Semi Clean Corn</span>
        //             </Link>
        //         </div>
        //     </nav>}

        //     {!props.isSidebarToggled && <nav className="nav flex-column border-end bg-body-tertiary h-100">
        //         <div className="container">
        //             <div className="border-bottom">
        //                 <span className="fw-bold">Ahmed</span><br />
        //             </div>

        //             <label className="fw-bold my-3">Main</label>
        //             <Link to="/dashboard" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
        //                 <i className="bi bi-grid"></i>
        //             </Link>

        //             <label className="fw-bold my-3">Pages</label>
        //             <Link to="/maintenance" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[1]}`} onClick={() => { handleIsActive(1) }}>
        //                 <i className="bi bi-nvme"></i>
        //             </Link>
        //             <Link to="/power" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[2]}`} onClick={() => { handleIsActive(2) }}>
        //                 <i className="bi bi-lightning"></i>
        //             </Link>
        //             <Link to="/vehicles" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[3]}`} onClick={() => { handleIsActive(3) }}>
        //                 <i className="bi bi-globe2"></i>
        //             </Link>
        //             <Link to="/machines" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[4]}`} onClick={() => { handleIsActive(4) }}>
        //                 <i className="bi bi-speedometer2"></i>
        //             </Link>
        //             <Link to="/inventory" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[5]}`} onClick={() => { handleIsActive(5) }}>
        //                 <i className="bi bi-suitcase2"></i>
        //             </Link>
        //             <Link to="/supplyChain" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[6]}`} onClick={() => { handleIsActive(6) }}>
        //                 <i className="bi bi-plug"></i>
        //             </Link>
        //             <Link to="/ai" className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[7]}`} onClick={() => { handleIsActive(7) }}>
        //                 <i className="bi bi-cloud"></i>
        //             </Link>
        //             <Link className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[8]}`} onClick={() => { handleIsActive(8) }}>
        //                 <i className="bi bi-file-earmark"></i>
        //             </Link>
        //             <Link className={`nav-link btn btn-outline-primary text-start text-dark ${props.sidebarTabsActive[9]}`} onClick={() => { handleIsActive(9) }}>
        //                 <i className="bi bi-file-earmark-break"></i>
        //             </Link>

        //             <label className="fw-bold my-3">Live</label>
        //             <Link className={`nav-link btn btn-outline-secondary text-start text-dark ${props.sidebarTabsActive[10]}`} onClick={() => { handleIsActive(10) }}>
        //                 <i className="bi bi-funnel"></i>
        //             </Link>
        //             <Link className={`nav-link btn btn-outline-secondary text-start text-dark ${props.sidebarTabsActive[11]}`} onClick={() => { handleIsActive(11) }}>
        //                 <i className="bi bi-filter"></i>
        //             </Link>
        //         </div>
        //     </nav>}
        // </>

        <>
            {props.isSidebarToggled && <nav className="w-fit h-screen pl-3 pr-7 pt-3 flex flex-col">
                <h6 className="font-semibold">Ahmed</h6>
                <p className="pb-3">Ahmed@corn.com</p>
                <hr />

                <label className="font-semibold pt-3">Main</label>

                <Link to="/dashboard" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
                    <i className="bi bi-grid"></i>
                    <span className="ml-2">Dashboard</span>
                </Link>

                <label className="font-semibold pt-3">Pages</label>

                <Link to="/maintenance" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[1]}`} onClick={() => { handleIsActive(1) }}>
                    <i className="bi bi-nvme"></i>
                    <span className="ml-2">Maintenance</span>
                </Link>
                <Link to="/power" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[2]}`} onClick={() => { handleIsActive(2) }}>
                    <i className="bi bi-lightning"></i>
                    <span className="ml-2">Power</span>
                </Link>
                <Link to="/vehicles" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[3]}`} onClick={() => { handleIsActive(3) }}>
                    <i className="bi bi-globe2"></i>
                    <span className="ml-2">Vehicles</span>
                </Link>
                <Link to="/machines" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[4]}`} onClick={() => { handleIsActive(4) }}>
                    <i className="bi bi-speedometer2"></i>
                    <span className="ml-2">Machines</span>
                </Link>
                <Link to="/inventory" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[5]}`} onClick={() => { handleIsActive(5) }}>
                    <i className="bi bi-suitcase2"></i>
                    <span className="ml-2">Inventory</span>
                </Link>
                <Link to="/supplyChain" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[6]}`} onClick={() => { handleIsActive(6) }}>
                    <i className="bi bi-plug"></i>
                    <span className="ml-2">Supply-Chain</span>
                </Link>
                <Link to="/ai" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[7]}`} onClick={() => { handleIsActive(7) }}>
                    <i className="bi bi-cloud"></i>
                    <span className="ml-2">AI</span>
                </Link>
                <Link className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[8]}`} onClick={() => { handleIsActive(8) }}>
                    <i className="bi bi-file-earmark"></i>
                    <span className="ml-2">Reports</span>
                </Link>
                <Link className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[9]}`} onClick={() => { handleIsActive(9) }}>
                    <i className="bi bi-file-earmark-break"></i>
                    <span className="ml-2">Orders</span>
                </Link>

                <label className="font-semibold mt-3">Live</label>

                <Link className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[10]}`} onClick={() => { handleIsActive(10) }}>
                    <i className="bi bi-funnel"></i>
                    <span className="ml-2">Clean Corn</span>
                </Link>
                <Link className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[11]}`} onClick={() => { handleIsActive(11) }}>
                    <i className="bi bi-filter"></i>
                    <span className="ml-2">Semi Clean Corn</span>
                </Link>
            </nav>}


            {!props.isSidebarToggled && <nav className="w-fit h-screen pl-3 pr-7 pt-3 flex flex-col">
                <h6 className="font-semibold">Ahmed</h6>
                <hr />

                <label className="font-semibold pt-3">Main</label>

                <Link to="/dashboard" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
                    <i className="bi bi-grid"></i>
                </Link>

                <label className="font-semibold pt-3">Pages</label>

                <Link to="/maintenance" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[1]}`} onClick={() => { handleIsActive(1) }}>
                    <i className="bi bi-nvme"></i>
                </Link>
                <Link to="/power" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[2]}`} onClick={() => { handleIsActive(2) }}>
                    <i className="bi bi-lightning"></i>

                </Link>
                <Link to="/vehicles" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[3]}`} onClick={() => { handleIsActive(3) }}>
                    <i className="bi bi-globe2"></i>
                </Link>
                <Link to="/machines" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[4]}`} onClick={() => { handleIsActive(4) }}>
                    <i className="bi bi-speedometer2"></i>
                </Link>
                <Link to="/inventory" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[5]}`} onClick={() => { handleIsActive(5) }}>
                    <i className="bi bi-suitcase2"></i>
                </Link>
                <Link to="/supplyChain" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[6]}`} onClick={() => { handleIsActive(6) }}>
                    <i className="bi bi-plug"></i>
                </Link>
                <Link to="/ai" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[7]}`} onClick={() => { handleIsActive(7) }}>
                    <i className="bi bi-cloud"></i>
                </Link>
                <Link className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[8]}`} onClick={() => { handleIsActive(8) }}>
                    <i className="bi bi-file-earmark"></i>
                </Link>
                <Link className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[9]}`} onClick={() => { handleIsActive(9) }}>
                    <i className="bi bi-file-earmark-break"></i>
                </Link>

                <label className="font-semibold mt-3">Live</label>

                <Link className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[10]}`} onClick={() => { handleIsActive(10) }}>
                    <i className="bi bi-funnel"></i>
                </Link>
                <Link className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 ${props.sidebarTabsActive[11]}`} onClick={() => { handleIsActive(11) }}>
                    <i className="bi bi-filter"></i>
                </Link>
            </nav>}
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);