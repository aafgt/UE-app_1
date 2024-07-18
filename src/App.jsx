import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isSidebarToggled: state.isSidebarToggled.isSidebarToggled
  }
}

function App(props) {

  return (
    <>
      <div className="">
        <div className="min-h-screen bg-[#E7E7E7]">
          {props.isSidebarToggled && <>
            <div className="flex">
              <div className="w-2/12 sticky top-0 h-screen">
                <Sidebar />
              </div>
              <div className="flex-auto w-10/12 bg-[#E7E7E7] min-h-screen">
                <Outlet />
              </div>
            </div>
          </>}
          {!props.isSidebarToggled && <>
            <div className="flex">
              <div className="sticky top-0 h-screen">
                <Sidebar />
              </div>
              <div className="flex-auto">
                <Outlet />
              </div>
            </div>
          </>}
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, null)(App);