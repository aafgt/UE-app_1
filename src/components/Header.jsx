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
        <div className="bg-blue-700 text-white py-2 pl-4 pr-4 flex justify-between">
            <div className="flex justify-center items-center">
                <img src="/vite.svg" alt="" />
                <p className="mr-2">UE</p>
                <p className="text-sm mr-2" onClick={handleSidebarToggle}>icon</p>
                <p className="text-sm">icon</p>
            </div>
            <div className="flex-1 flex justify-center mx-5">
                <input className="text-black px-1" type="text" placeholder="Search" />
                <button className="bg-black px-1">Search</button>
            </div>
            <div className="flex justify-center items-center">
                <p className="mr-2">settings</p>
                <p className="">Account</p>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Header);