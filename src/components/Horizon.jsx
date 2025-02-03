// import { useEffect, useState } from "react";
// import HorizonTable from "./horizon/HorizonTable";
// import MetricCard from "./horizon/MetricCard";
// import PerformanceCard from "./horizon/PerformanceCard";
// import CowDetailsModal from "./horizon/CowDetailsModal";
// import OeeCard from "./horizon/OeeCard";
// import UptimeCard from "./horizon/UptimeCard";
// import { connect } from "react-redux";
// import { addHorizonMetricsWS, fetchHorizonMetrics } from "../redux/ActionCreators";
// import RateOfProductionCard from "./horizon/RateOfProductionCard";
// import DatePickerCard from "./horizon/DatePickerCard";
// // import WebSocketService3 from "../WebSocketService3";
// import SockJS from "sockjs-client";
// import { Stomp } from "@stomp/stompjs";
// import { Client } from "@stomp/stompjs";
// import CowsModal from "./horizon/CowsModal";
// // import Stomp from "stompjs";
// // import WebSocketService from "../WebSocketService";

// const mapStateToProps = (state) => {
//     return {
//         horizon: state.horizon
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     fetchHorizonMetrics: ({ date, year }) => { dispatch(fetchHorizonMetrics({ date, year })) },
//     addHorizonMetricsWS: (data) => { dispatch(addHorizonMetricsWS(data)) }
// })

// const Horizon = (props) => {

//     const [cowDetails, setCowDetails] = useState(null);

//     const [toggleModal, setToggleModal] = useState(false);

//     const handleToggleModal = async (cowId) => {
//         // takes the cow, to get details...
//         const response = await fetch(`http://192.168.1.120:5188/api/Front/GetCowDetails?cowId=${cowId}`);

//         if (!response.ok) {
//             const message = `An error has occured: ${response.status}`;
//             throw new Error(message);
//         }

//         const data = await response.json();
//         setCowDetails(data);

//         setToggleModal(!toggleModal);
//     };

//     const [toggleModal2, setToggleModal2] = useState(false);

//     const handleToggleModal2 = () => {
//         setToggleModal2(!toggleModal2);
//     };

//     // const [webSocketData, setWebSocketData] = useState(null);

//     // const handleSendMessageOLD = () => {
//     //     WebSocketService.sendMessage("Hello");
//     //     // setMessage('');
//     // };

//     // const { connect, sendMessage, isConnected } = WebSocketService3();

//     // useEffect(() => {
//     //     connect();  // Automatically connect when the component mounts
//     //   }, [connect]);

//     useEffect(() => {
//         props.fetchHorizonMetrics({});

//         // // Connect to WebSocket when the component mounts
//         // WebSocketService.connect();

//         // // Cleanup WebSocket connection when the component unmounts
//         // return () => {
//         //     WebSocketService.disconnect();
//         // };
//     }, []);

//     // useEffect(() => {
//     //     // Subscribe to the WebSocket topic
//     //     const subscription = WebSocketService.client.subscribe('/topic/messages', (message) => {
//     //       setMessages((prevMessages) => [...prevMessages, message.body]);
//     //     });

//     //     // Cleanup function to unsubscribe when the component is unmounted
//     //     return () => {
//     //       if (subscription) {
//     //         subscription.unsubscribe();  // Properly unsubscribe from the WebSocket topic
//     //       }
//     //     };
//     //   }, []);      

//     //   const { isConnected, connect, sendMessage, disconnect } = WebSocketService();

//     //   useEffect(() => {
//     //     if (!isConnected) {
//     //       connect();
//     //     }

//     //     return () => {
//     //         if (isConnected) {
//     //             disconnect();
//     //         }
//     //     };
//     //   }, [isConnected, connect]);

//     //   const handleSendMessage = () => {
//     //     if (message.trim()) {
//     //       sendMessage(message);  // Send message via WebSocket
//     //       setMessage('');
//     //     }
//     //   };

//     const [stompClient, setStompClient] = useState(null);
//     useEffect(() => {
//         //   const socket = new SockJS("http://localhost:8080/ws");
//         // const socketFactory = () => new SockJS('http://localhost:8080/ws');
//         var socket = () => new WebSocket('ws://localhost:8080/ws/websocket');

//         const client = Stomp.over(socket);

//         // Heartbeat settings (incoming and outgoing in milliseconds)
//         const heartbeatIncoming = 20000; // 20 seconds
//         const heartbeatOutgoing = 20000; // 20 seconds

//         client.connect({
//             // 'client-id': 'your-client-id', // Optional: use a custom client id
//             'heart-beat': `${heartbeatOutgoing},${heartbeatIncoming}`,
//         }, (frame) => {
//             console.log('Connected: ' + frame);
//             client.subscribe("/topic/killedCowMetrics", (message) => {
//                 const receivedMessage = JSON.parse(message.body);
//                 console.log(receivedMessage);
//                 props.addHorizonMetricsWS(receivedMessage);
//             })
//         }, (error) => {
//             console.error('STOMP connection error: ', error);
//         });

//         setStompClient(client);

//         return () => {
//             if (client) {
//                 client.disconnect();
//             }
//         }
//     }, []);


//     // useEffect(() => {
//     //     const client = new Client({
//     //         brokerURL: 'http://localhost:8080/ws',
//     //         connectHeaders: {
//     //             // Any additional headers if needed (e.g., authorization tokens)
//     //         },
//     //         debug: function (str) {
//     //             console.log("debugg")
//     //             console.log(str);
//     //         },
//     //         reconnectDelay: 5000,
//     //         heartbeatIncoming: 4000,
//     //         heartbeatOutgoing: 4000,
//     //     });

//     //     client.onConnect = function (frame) {
//     //         // Do something, all subscribes must be done is this callback
//     //         // This is needed because this will be executed after a (re)connect
//     //         console.log("CONNECTED>>>")
//     //     };

//     //     client.onStompError = function (frame) {
//     //         // Will be invoked in case of error encountered at Broker
//     //         // Bad login/passcode typically will cause an error
//     //         // Complaint brokers will set `message` header with a brief message. Body may contain details.
//     //         // Compliant brokers will terminate the connection after any error
//     //         console.log('Broker reported error: ' + frame.headers['message']);
//     //         console.log('Additional details: ' + frame.body);
//     //     };

//     //     console.log("activating...");
//     //     client.activate();
//     //     console.log("ACTIVATED");

//     //     return () => {
//     //         if (client) {
//     //             client.deactivate(); // Deactivate the client when the component unmounts
//     //         }
//     //     }
//     // }, [])

//     const [cowsList, setCowsList] = useState([]);
//     const handleCowsList = async (batchId) => {
//         const response = await fetch(`http://192.168.1.120:5188/api/Front/GetCowsIdsByBatch?batchCode=${batchId}`);

//         if (!response.ok) {
//             const message = `An error has occured: ${response.status}`;
//             throw new Error(message);
//         }

//         const data = await response.json();
//         setCowsList(data);
//     };


//     return (
//         <>
//             <div className="flex justify-end m-2">
//                 <DatePickerCard />
//             </div>

//             <div className="flex">
//                 <div className="w-4/5 m-3 px-5">
//                     <div className="flex gap-10 justify-around mb-5">
//                         <MetricCard title={"Cows Request"} value={"---"} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
//                         <MetricCard title={"Killed Cow"} value={props.horizon.cowsKilledMetrics?.killedCow} arrow={"up"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
//                         <MetricCard title={"Remainder"} value={"---"} arrow={"down"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
//                     </div>

//                     <div className="flex gap-10 justify-around">
//                         <MetricCard title={"Weight Of Killed Cow"} value={props.horizon.cowsKilledMetrics?.killedCowsWeight + " KG"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
//                         <MetricCard title={"Total Waste"} value={props.horizon.cowsKilledMetrics?.killedCowsWaste + " KG"} arrow={"down"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
//                         <MetricCard title={"Miscarriage"} value={"--- Tn"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
//                     </div>
//                 </div>
//                 <div className="w-1/5 m-3">
//                     <PerformanceCard />
//                 </div>
//             </div>

//             <div className="flex justify-end">
//                 <div className="w-4/5 m-3 px-5">
//                     <div className="m-3">
//                         <RateOfProductionCard />
//                     </div>
//                 </div>
//                 <div className="w-1/5 m-3">
//                     <OeeCard />
//                     <UptimeCard />
//                 </div>
//             </div>

//             <HorizonTable handleToggleModal2={handleToggleModal2} handleCowsList={handleCowsList} />

//             {toggleModal2 && <CowsModal cows={cowsList} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}

//             {toggleModal && <CowDetailsModal cow={cowDetails} handleToggleModal={handleToggleModal} />}
//         </>
//     );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Horizon);







import { useEffect, useState } from "react";
import HorizonTable from "./horizon/HorizonTable";
import MetricCard from "./horizon/MetricCard";
import PerformanceCard from "./horizon/PerformanceCard";
import CowDetailsModal from "./horizon/CowDetailsModal";
import OeeCard from "./horizon/OeeCard";
import UptimeCard from "./horizon/UptimeCard";
import RateOfProductionCard from "./horizon/RateOfProductionCard";
import DatePickerCard from "./horizon/DatePickerCard";
import CowsModal from "./horizon/CowsModal";

import * as signalR from '@microsoft/signalr';

import { SERVER_URL } from "../MetaData";
import HorizonTableForSales from "./horizon/HorizonTableForSales";

const Horizon = (props) => {

    const [cowDetails, setCowDetails] = useState(null);

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = async (cowId) => {
        // takes the cow, to get details...
        const response = await fetch(SERVER_URL + `/api/Front/GetCowDetails?cowId=${cowId}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setCowDetails(data);

        setToggleModal(!toggleModal);
    };

    const handleToggleModalExit = () => {
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = () => {
        setToggleModal2(!toggleModal2);
    };


    const [cowsList, setCowsList] = useState([]);
    const handleCowsList = async (batchId) => {
        const response = await fetch(SERVER_URL + `/api/Front/GetCowsIdsByBatch?batchCode=${batchId}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setCowsList(data.cows);
    };

    const [horizonStats, setHorizonStats] = useState(null);
    const [horizonStatsForSales, setHorizonStatsForSales] = useState(null);
    const [horizonStatsForCutting, setHorizonStatsForCutting] = useState(null);
    // const handleHorizonStats = async () => {
    //     const response = await fetch(SERVER_URL + `/api/Front/GetCowStatistics`);

    //     if (!response.ok) {
    //         const message = `An error has occured: ${response.status}`;
    //         throw new Error(message);
    //     }

    //     const data = await response.json();
    //     setHorizonStats(data);
    // };

    const [graphDate, setGraphDate] = useState("");
    const [date, setDate] = useState("");
    const handleHorizonStats = async () => {
        const today = new Date();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();
        const year = today.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;

        if (graphDate === "") {
            setGraphDate(formattedDate);
        }

        if (date === "") {
            setDate(formattedDate);
        }

        const response = await fetch(SERVER_URL + `/api/Front/GetCowStatistics?graphtime=${graphDate}&date=${date}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setHorizonStats(data);
    };

    const handleHorizonStatsForSales = async () => {
        const today = new Date();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();
        const year = today.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;

        if (graphDate === "") {
            setGraphDate(formattedDate);
        }

        if (date === "") {
            setDate(formattedDate);
        }

        const response = await fetch(SERVER_URL + `/api/Front/GetHorizonDetailsForSeals?graphtime=${graphDate}&date=${date}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status} | ${await response.text()}`;
            throw new Error(message);
        }

        const data = await response.json();
        setHorizonStatsForSales(data);
    };

    const handleHorizonStatsForCutting = async () => {
        const today = new Date();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();
        const year = today.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;

        if (graphDate === "") {
            setGraphDate(formattedDate);
        }

        if (date === "") {
            setDate(formattedDate);
        }

        const response = await fetch(SERVER_URL + `/api/Front/GetHorizonDetailsForRecvory?graphtime=${graphDate}&date=${date}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status} | ${await response.text()}`;
            throw new Error(message);
        }

        const data = await response.json();
        setHorizonStatsForCutting(data);
    };

    const [selectedToTrack, setSelectedToTrack] = useState("ذبح");

    useEffect(() => {
        if (selectedToTrack === "ذبح") {
            handleHorizonStats();
        }
        else if (selectedToTrack === "بيع") {
            handleHorizonStatsForSales();
        }
        else if (selectedToTrack === "تشافي") {
            handleHorizonStatsForCutting();
        }

        // // إنشاء اتصال
        // const connection = new signalR.HubConnectionBuilder()
        //     .withUrl(SERVER_URL + `/cowHub`) // رابط الـ Hub
        //     .build();

        // // التعامل مع الرسائل القادمة
        // connection.on("CowScanned", (data) => {
        //     console.log("Cow Scanned:", data);
        //     // قم بتحديث واجهة المستخدم بناءً على البيانات الجديدة
        //     setHorizonStats(data.value);
        // });

        // // بدء الاتصال
        // connection.start()
        //     .then(() => console.log("SignalR Connected"))
        //     .catch(err => console.error("Error connecting to SignalR:", err));

        // return () => {
        //     connection.stop().then(() => {
        //         console.log("Disconnected from SignalR hub");
        //     }).catch(err => console.error("Error Disconnecting from SignalR hub: ", err));
        // }
    }, [graphDate, date, selectedToTrack]);

    useEffect(() => {
        // إنشاء اتصال
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(SERVER_URL + `/cowHub`) // رابط الـ Hub
            .build();

        // التعامل مع الرسائل القادمة
        connection.on("CowScanned", (data) => {
            // console.log("Cow Scanned:", data);
            // قم بتحديث واجهة المستخدم بناءً على البيانات الجديدة
            const today = new Date().toLocaleDateString();
            const currDate = new Date(date).toLocaleDateString();
            const currGraphDate = new Date(graphDate).toLocaleDateString();
            if (currDate === today && currGraphDate === today) {
                setHorizonStats(data.value);
            }
            
            // setHorizonStats(data.value);
        });

        connection.on("Seals", (data) => {
            // console.log("Sale Scanned:", data);
            // قم بتحديث واجهة المستخدم بناءً على البيانات الجديدة
            const today = new Date().toLocaleDateString();
            const currDate = new Date(date).toLocaleDateString();
            const currGraphDate = new Date(graphDate).toLocaleDateString();
            if (currDate === today && currGraphDate === today) {
                setHorizonStatsForSales(data.value);
            }

            // setHorizonStatsForSales(data.value);
        });

        connection.on("Recvory", (data) => {
            // console.log("Cutting Scanned:", data);
            // قم بتحديث واجهة المستخدم بناءً على البيانات الجديدة
            const today = new Date().toLocaleDateString();
            const currDate = new Date(date).toLocaleDateString();
            const currGraphDate = new Date(graphDate).toLocaleDateString();
            if (currDate === today && currGraphDate === today) {
                setHorizonStatsForCutting(data.value);
            }

            // setHorizonStatsForCutting(data.value);
        });

        // بدء الاتصال
        connection.start()
            .then(() => console.log("SignalR Connected"))
            .catch(err => console.error("Error connecting to SignalR:", err));

        return () => {
            connection.stop().then(() => {
                console.log("Disconnected from SignalR hub");
            }).catch(err => console.error("Error Disconnecting from SignalR hub: ", err));
        }
    }, []);


    return (
        <>
        {console.log("today", new Date().toLocaleDateString())}
        {console.log("date", new Date(date).toLocaleDateString())}
        {console.log("graphDate", new Date(graphDate).toLocaleDateString())}
            {selectedToTrack === "ذبح" && <>
                <div className="flex justify-between m-2">
                    <div className="ml-5 space-x-5">
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "ذبح" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("ذبح"); }}>ذبح</button>
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "بيع" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("بيع"); }}>بيع</button>
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "تشافي" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("تشافي"); }}>تشافي</button>
                    </div>

                    <DatePickerCard setDate={setDate} setGraphDate={setGraphDate} />
                </div>

                <div className="flex">
                    <div className="w-4/5 m-3 px-5">
                        <div className="flex gap-10 justify-around mb-5">
                            <MetricCard title={"Cows Request"} value={horizonStats?.cowRequest} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                            <MetricCard title={"Slaughtered Cows"} value={horizonStats?.killedCow} arrow={"up"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                            <MetricCard title={"Remainder"} value={horizonStats?.reminders} arrow={"down"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                        </div>

                        <div className="flex gap-10 justify-around">
                            <MetricCard title={"Weight Of Slaughtered Cows"} value={horizonStats?.weightOfKilledCows + " KG"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                            <MetricCard title={"Total Waste"} value={horizonStats?.totalWaste + " KG"} arrow={"down"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                            <MetricCard title={"Miscarriage"} value={horizonStats?.totalMiscarage + " KG"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                        </div>
                    </div>
                    <div className="w-1/5 m-3">
                        <PerformanceCard performance={horizonStats?.performance} />
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="w-4/5 m-3 px-5">
                        <div className="m-3">
                            <RateOfProductionCard graph={horizonStats?.graph} setGraphDate={setGraphDate} graphDate={graphDate} />
                        </div>
                    </div>
                    <div className="w-1/5 m-3 flex flex-col justify-around">
                        <OeeCard />
                        <UptimeCard upTime={horizonStats?.upTime} />
                    </div>
                </div>

                <HorizonTable tableData={horizonStats?.table} handleToggleModal2={handleToggleModal2} handleCowsList={handleCowsList} />

                {toggleModal2 && <CowsModal cows={cowsList} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}

                {toggleModal && <CowDetailsModal cow={cowDetails} handleToggleModal={handleToggleModalExit} />}
            </>}

            {selectedToTrack === "بيع" && <>
                <div className="flex justify-between m-2">
                    <div className="ml-5 space-x-5">
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "ذبح" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("ذبح"); }}>ذبح</button>
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "بيع" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("بيع"); }}>بيع</button>
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "تشافي" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("تشافي"); }}>تشافي</button>
                    </div>

                    <DatePickerCard setDate={setDate} setGraphDate={setGraphDate} />
                </div>

                <div className="flex">
                    <div className="w-4/5 m-3 px-5">
                        <div className="flex gap-10 justify-around mb-5">
                            <MetricCard title={"Sales Request"} value={horizonStatsForSales?.piecesRequest} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                            <MetricCard title={"Sold"} value={horizonStatsForSales?.soldPieces} arrow={"up"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                            <MetricCard title={"Remainder"} value={horizonStatsForSales?.reminders} arrow={"down"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                        </div>

                        <div className="flex gap-10 justify-around">
                            <MetricCard title={"Weight Of Sold Pieces"} value={horizonStatsForSales?.weightOfSoldPieces + " KG"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                            {/* <MetricCard title={"Total Waste"} value={horizonStats?.totalWaste + " KG"} arrow={"down"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                            <MetricCard title={"Miscarriage"} value={horizonStats?.totalMiscarage + " KG"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} /> */}
                        </div>
                    </div>
                    <div className="w-1/5 m-3">
                        <PerformanceCard performance={horizonStatsForSales?.performance} />
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="w-4/5 m-3 px-5">
                        <div className="m-3">
                            <RateOfProductionCard graph={horizonStatsForSales?.graph} setGraphDate={setGraphDate} graphDate={graphDate} />
                        </div>
                    </div>
                    <div className="w-1/5 m-3 flex flex-col justify-around">
                        <OeeCard />
                        <UptimeCard upTime={horizonStatsForSales?.upTime} />
                    </div>
                </div>

                <HorizonTableForSales tableData={horizonStatsForSales?.table} handleToggleModal2={handleToggleModal2} handleCowsList={handleCowsList} />

                {toggleModal2 && <CowsModal cows={cowsList} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}

                {toggleModal && <CowDetailsModal cow={cowDetails} handleToggleModal={handleToggleModalExit} />}
            </>}

            {selectedToTrack === "تشافي" && <>
                <div className="flex justify-between m-2">
                    <div className="ml-5 space-x-5">
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "ذبح" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("ذبح"); }}>ذبح</button>
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "بيع" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("بيع"); }}>بيع</button>
                        <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "تشافي" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("تشافي"); }}>تشافي</button>
                    </div>

                    <DatePickerCard setDate={setDate} setGraphDate={setGraphDate} />
                </div>

                <div className="flex">
                    <div className="w-4/5 m-3 px-5">
                        <div className="flex gap-10 justify-around mb-5">
                            <MetricCard title={"Cutting Request"} value={horizonStatsForCutting?.piecesRequest} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                            <MetricCard title={"Cut Pieces"} value={horizonStatsForCutting?.soldPieces} arrow={"up"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                            <MetricCard title={"Remainder"} value={horizonStatsForCutting?.reminders} arrow={"down"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                        </div>

                        <div className="flex gap-10 justify-around">
                            <MetricCard title={"Weight Of Cut Pieces"} value={horizonStatsForCutting?.weightOfSoldPieces + " KG"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                            {/* <MetricCard title={"Total Waste"} value={horizonStats?.totalWaste + " KG"} arrow={"down"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                            <MetricCard title={"Miscarriage"} value={horizonStats?.totalMiscarage + " KG"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} /> */}
                        </div>
                    </div>
                    <div className="w-1/5 m-3">
                        <PerformanceCard performance={horizonStatsForCutting?.performance} />
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="w-4/5 m-3 px-5">
                        <div className="m-3">
                            <RateOfProductionCard graph={horizonStatsForCutting?.graph} setGraphDate={setGraphDate} graphDate={graphDate} />
                        </div>
                    </div>
                    <div className="w-1/5 m-3 flex flex-col justify-around">
                        <OeeCard />
                        <UptimeCard upTime={horizonStatsForCutting?.upTime} />
                    </div>
                </div>

                <HorizonTableForSales tableData={horizonStatsForCutting?.table} handleToggleModal2={handleToggleModal2} handleCowsList={handleCowsList} />

                {toggleModal2 && <CowsModal cows={cowsList} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}

                {toggleModal && <CowDetailsModal cow={cowDetails} handleToggleModal={handleToggleModalExit} />}
            </>}
        </>
    );
}

export default Horizon;