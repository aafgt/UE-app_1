import { useEffect, useState } from "react";
import { SERVER_URL } from "../MetaData";
import AdminOrders from "./admin/AdminOrders";

const Admin = () => {
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
            <div>
                <div className="mx-5 mt-3 flex justify-between">
                    <p className="w-auto overflow-x-auto text-xl font-semibold">Hello, {userData?.displayName}</p>
                    <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" type="button" onClick={handleLogOut}>Logout</button>
                </div>

                <AdminOrders />
            </div>
        )
    }
    else {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-between">
                        <h3 className="font-semibold text-xl text-[#043912]">Login</h3>
                        <span className="modal-close cursor-pointer" onClick={() => { }}>×</span>
                    </div>
                    <form className="m-5 mx-24">
                        <div className="flex justify-between">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Username</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, name: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Password</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="password" onChange={(e) => { setNewOrderForm({ ...newOrderForm, password: e.target.value }) }} />
                        </div>
                    </form>
                    <p className="text-red-600">{createOrderValid !== "valid" && createOrderValid}</p>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleOrderSubmit} disabled={createOrderValid !== "valid"}>Confirm</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={() => { }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;