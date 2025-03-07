import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ActiveSidebarTabs, toggleSidebar } from "../redux/ActionCreators";
import { useEffect } from "react";

const mapStateToProps = (state) => {
    return {
        isSidebarToggled: state.isSidebarToggled.isSidebarToggled,
        sidebarTabsActive: state.isSidebarToggled.sidebarTabsActive
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: () => { dispatch(toggleSidebar()) },
    ActiveSidebarTabs: (new_isActive) => { dispatch(ActiveSidebarTabs(new_isActive)) }
})

function Sidebar(props) {

    const handleSidebarToggle = () => {
        props.toggleSidebar();
    };

    const handleIsActive = (tab) => {
        let new_isActive = props.sidebarTabsActive.map((t, index) => {
            return index === tab ? t = "bg-[#E7E7E7] text-black  rounded-l-full" : t = "";
        });
        props.ActiveSidebarTabs(new_isActive);
    };

    useEffect(() => {
        let flag = true;
        for (let index = 0; index < props.sidebarTabsActive.length; index++) {
            const element = props.sidebarTabsActive[index];
            if (element !== "") {
                handleIsActive(index);
                flag = false;
            }
        }

        if (flag) {
            handleIsActive(0);
        }
    }, []);

    return (
        <>
            {props.isSidebarToggled && <nav className="w-full h-full   pt-3 flex flex-col bg-[#73C088] rounded-r-2xl text-white font-semibold">
                <div className="flex justify-end">
                    <i className="bi bi-list text-3xl text-white hover:cursor-pointer" onClick={handleSidebarToggle}></i>
                </div>

                <div className="ml-2 mb-4">
                    <p className="w-auto overflow-x-auto text-xs font-semibold">{props.userData?.displayName}</p>
                    <p className="w-auto overflow-x-auto text-xs font-semibold">({props.userData?.email})</p>
                    <button className="text-sm text-white bg-red-300 rounded-md px-4 py-1 mt-1" type="button" onClick={props.handleLogOut}><i className="bi bi-box-arrow-left"></i> <span className="ml-1">Logout</span></button>
                </div>

                {/* <Link to="/dashboard" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
                    <i className="bi bi-grid"></i>
                    <span className="ml-2">Dashboard</span>
                </Link> */}


                {/* <Link to="/supplyChain" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[1]}`} onClick={() => { handleIsActive(1) }}>
                    <i className="bi bi-plug"></i>
                    <span className="ml-2">Supply-Chain</span>
                </Link> */}

                {/* <Link to="/reports" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[8]}`} onClick={() => { handleIsActive(8) }}>
                    <i className="bi bi-file-earmark"></i>
                    <span className="ml-2">Reports</span>
                </Link> */}

                <Link to="/dashboard" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
                    <i className="bi bi-grid"></i>
                    <span className="ml-2">Dashboard</span>
                </Link>

                <Link to="/orders" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[1]}`} onClick={() => { handleIsActive(1) }}>
                    <i className="bi bi-file-earmark-break"></i>
                    <span className="ml-2">Orders</span>
                </Link>

                {/* <Link to="/speciesOfCows" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[3]}`} onClick={() => { handleIsActive(3) }}>
                    <i className="bi bi-diagram-3"></i>
                    <span className="ml-2">Species of Cows</span>
                </Link> */}

                <Link to="/client" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[2]}`} onClick={() => { handleIsActive(2) }}>
                    <i className="bi bi-diagram-3"></i>
                    <span className="ml-2">Client</span>
                </Link>

                <Link to="/inventory" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[3]}`} onClick={() => { handleIsActive(3) }}>
                    <i className="bi bi-box-seam"></i>
                    <span className="ml-2">Inventory</span>
                </Link>

                {/* <Link to="/admin" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[4]}`} onClick={() => { handleIsActive(4) }}>
                    <i className="bi bi-shield-lock"></i>
                    <span className="ml-2">Admin</span>
                </Link> */}

                <Link to="/report" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[4]}`} onClick={() => { handleIsActive(4) }}>
                    <i className="bi bi-file-earmark"></i>
                    <span className="ml-2">Report</span>
                </Link>

                <div className="flex items-end justify-center flex-auto">
                    <img src="/ue-dt_logo.png" alt="ue-dt" width="35" height="35" />
                </div>
            </nav>}


            {!props.isSidebarToggled && <nav className="w-fit h-full  pt-3 flex flex-col bg-[#73C088] rounded-r-2xl text-white font-semibold">
                <div className="flex justify-end">
                    <i className="bi bi-list text-3xl text-white hover:cursor-pointer" onClick={handleSidebarToggle}></i>
                </div>

                <div className="ml-2 my-4">
                    <button className="text-sm text-white bg-red-300 rounded-full w-8 h-8 mt-1" type="button" onClick={props.handleLogOut}><i className="bi bi-box-arrow-left"></i></button>
                </div>

                {/* <Link to="/dashboard" className={`ml-2 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
                    <i className="bi bi-grid"></i>
                </Link> */}


                {/* <Link to="/supplyChain" className={`ml-2 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[1]}`} onClick={() => { handleIsActive(1) }}>
                    <i className="bi bi-plug"></i>
                </Link> */}

                {/* <Link  to="/reports" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[8]}`} onClick={() => { handleIsActive(8) }}>
                    <i className="bi bi-file-earmark"></i>
                </Link> */}

                <Link to="/dashboard" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
                    <i className="bi bi-grid"></i>
                </Link>

                <Link to="/orders" className={`ml-2 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[1]}`} onClick={() => { handleIsActive(1) }}>
                    <i className="bi bi-file-earmark-break"></i>
                </Link>

                {/* <Link to="/speciesOfCows" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[3]}`} onClick={() => { handleIsActive(3) }}>
                    <i className="bi bi-diagram-3"></i>
                </Link> */}

                <Link to="/client" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[2]}`} onClick={() => { handleIsActive(2) }}>
                    <i className="bi bi-diagram-3"></i>
                </Link>

                <Link to="/inventory" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[3]}`} onClick={() => { handleIsActive(3) }}>
                    <i className="bi bi-box-seam"></i>
                </Link>

                {/* <Link to="/admin" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[4]}`} onClick={() => { handleIsActive(4) }}>
                    <i className="bi bi-shield-lock"></i>
                </Link> */}

                <Link to="/report" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:ring-white hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[4]}`} onClick={() => { handleIsActive(4) }}>
                    <i className="bi bi-file-earmark"></i>
                </Link>

                <div className="flex items-end justify-center flex-auto">
                    <img src="/ue-dt_logo.png" alt="ue-dt" width="25" height="25" />
                </div>
            </nav>}
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);