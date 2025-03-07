import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { SERVER_URL } from "./MetaData";

const mapStateToProps = (state) => {
  return {
    isSidebarToggled: state.isSidebarToggled.isSidebarToggled
  }
}

function App(props) {

  const [userData, setUserData] = useState(null);

  const [newOrderForm, setNewOrderForm] = useState({
    name: "",
    password: ""
  });

  const [createOrderValid, setCreateOrderValid] = useState("");
  const isCreateOrderValid = () => {
    if (newOrderForm.name === "" || newOrderForm.password === "") {
      setCreateOrderValid("All fields are required.");
      return false;
    }

    setCreateOrderValid("valid");
    return true;
  };

  useEffect(() => {
    isCreateOrderValid();
  }, [newOrderForm]);

  const handleOrderSubmit = async () => {
    const response = await fetch(SERVER_URL + "/api/Account/Login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrderForm)
    });

    if (!response.ok) {
      alert(`${await response.text()}`);
      return;
    }

    const res = await response.json();
    sessionStorage.setItem("userData", JSON.stringify(res));

    // sessionStorage.setItem("authToken", res.token);
    // axios.get('/protected', {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem("authToken")}`
    //     }
    // });

    setNewOrderForm({
      name: "",
      password: ""
    });

    // redirect if authorized
    setUserData(res);
  };

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogOut = () => {
    sessionStorage.removeItem("userData");
    setUserData(null);
  };


  if (userData) {
    return (
      <>
        <div className="">
          <div className="min-h-screen bg-[#E7E7E7]">
            {props.isSidebarToggled && <>
              <div className="flex">
                <div className="w-2/12 sticky top-0 h-screen">
                  <Sidebar userData={userData} handleLogOut={handleLogOut} />
                </div>
                <div className="flex-auto w-10/12 bg-[#E7E7E7] min-h-screen">
                  <Outlet />
                </div>
              </div>
            </>}
            {!props.isSidebarToggled && <>
              <div className="flex">
                <div className="sticky top-0 h-screen">
                  <Sidebar userData={userData} handleLogOut={handleLogOut} />
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
  }
  else {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-green-100 max-w-xl w-full rounded-md">
          <div className="py-3 flex items-center justify-center">
            <h3 className="font-semibold text-xl text-[#043912]">Login</h3>
          </div>
          <form className="m-5 mx-24" onSubmit={(e) => { e.preventDefault(); handleOrderSubmit(); }}>
            <div className="flex justify-between">
              <label className="mr-2 text-[#043912] font-medium text-lg">Username</label>
              <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, name: e.target.value }) }} />
            </div>
            <div className="flex justify-between mt-3">
              <label className="mr-2 text-[#043912] font-medium text-lg">Password</label>
              <input className="border-2 w-7/12 p-1 rounded-lg" type="password" onChange={(e) => { setNewOrderForm({ ...newOrderForm, password: e.target.value }) }} />
            </div>

            <div className="mt-3 py-3 flex items-center justify-center">
              <button type="submit" className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" disabled={createOrderValid !== "valid"}>Login</button>
            </div>
          </form>
          <p className="text-red-600 m-2">{createOrderValid !== "valid" && createOrderValid}</p>
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, null)(App);