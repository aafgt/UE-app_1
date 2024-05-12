import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    isSidebarToggled: state.isSidebarToggled.isSidebarToggled
  }
}

function App(props) {

  return (
    <>
      {/* <Header /> */}
      <div className="">
        <div className="min-h-screen bg-slate-100">
          {props.isSidebarToggled && <>
            <div className="flex">
              <div className="w-2/12">
                <Sidebar />
              </div>
              <div className="flex-auto w-10/12 bg-slate-100 min-h-screen">
                <Outlet />
              </div>
            </div>
          </>}
          {!props.isSidebarToggled && <>
            <div className="flex">
              <div className="">
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
  )
}

export default connect(mapStateToProps, null)(App);
