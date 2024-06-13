import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ActiveSidebarTabs, toggleSidebar } from "../redux/ActionCreators";

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

    return (
        <>
            {props.isSidebarToggled && <nav className="w-full h-full   pt-3 flex flex-col bg-[#73C088] rounded-r-2xl text-white font-semibold">
                <div className="flex justify-end">
                    <i className="bi bi-list text-3xl text-white hover:cursor-pointer" onClick={handleSidebarToggle}></i>
                </div>

                <Link to="/dashboard" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
                    <i className="bi bi-grid"></i>
                    <span className="ml-2">Dashboard</span>
                </Link>


                <Link to="/supplyChain" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[6]}`} onClick={() => { handleIsActive(6) }}>
                    <i className="bi bi-plug"></i>
                    <span className="ml-2">Supply-Chain</span>
                </Link>

                {/* <Link to="/reports" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[8]}`} onClick={() => { handleIsActive(8) }}>
                    <i className="bi bi-file-earmark"></i>
                    <span className="ml-2">Reports</span>
                </Link> */}

                <Link to="/orders" className={`ml-1 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[9]}`} onClick={() => { handleIsActive(9) }}>
                    <i className="bi bi-file-earmark-break"></i>
                    <span className="ml-2">Orders</span>
                </Link>
            </nav>}


            {!props.isSidebarToggled && <nav className="w-fit h-full  pt-3 flex flex-col bg-[#73C088] rounded-r-2xl text-white font-semibold">
                <div className="flex justify-end">
                    <i className="bi bi-list text-3xl text-white hover:cursor-pointer" onClick={handleSidebarToggle}></i>
                </div>

                <Link to="/dashboard" className={`ml-2 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[0]}`} onClick={() => { handleIsActive(0) }}>
                    <i className="bi bi-grid"></i>
                </Link>


                <Link to="/supplyChain" className={`ml-2 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[6]}`} onClick={() => { handleIsActive(6) }}>
                    <i className="bi bi-plug"></i>
                </Link>

                {/* <Link  to="/reports" className={`ml-5 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[8]}`} onClick={() => { handleIsActive(8) }}>
                    <i className="bi bi-file-earmark"></i>
                </Link> */}

                <Link to="/orders" className={`ml-2 mt-2 px-3 py-2 hover:ring-1 hover:bg-blue-50 hover:text-black ${props.sidebarTabsActive[9]}`} onClick={() => { handleIsActive(9) }}>
                    <i className="bi bi-file-earmark-break"></i>
                </Link>
            </nav>}
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);