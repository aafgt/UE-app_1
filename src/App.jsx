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
      <Header />
      <div className="container-fluid">
        <div className="row mt-2 h-100 min-vh-100">
          {props.isSidebarToggled && <>
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10 main_App">
              <Outlet />
            </div>
          </>}
          {!props.isSidebarToggled && <>
            <div className="col-1">
              <Sidebar />
            </div>
            <div className="col-11 main_App">
              <Outlet />
            </div>
          </>}
        </div>
      </div>
    </>
  )
}

export default connect(mapStateToProps, null)(App);
