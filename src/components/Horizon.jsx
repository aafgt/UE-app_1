import { useEffect, useState } from "react";
import HorizonTable from "./horizon/HorizonTable";
import MetricCard from "./horizon/MetricCard";
import PerformanceCard from "./horizon/PerformanceCard";
import CowsModal from "./dashboard/CowsModal";
import CowDetailsModal from "./horizon/CowDetailsModal";
import OeeCard from "./horizon/OeeCard";
import UptimeCard from "./horizon/UptimeCard";
import { connect } from "react-redux";
import { addHorizonMetricsWS, fetchHorizonMetrics } from "../redux/ActionCreators";
import RateOfProductionCard from "./horizon/RateOfProductionCard";
import DatePickerCard from "./horizon/DatePickerCard";
// import WebSocketService3 from "../WebSocketService3";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { Client } from "@stomp/stompjs";
// import Stomp from "stompjs";
// import WebSocketService from "../WebSocketService";

const mapStateToProps = (state) => {
    return {
        horizon: state.horizon
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchHorizonMetrics: ({ date, year }) => { dispatch(fetchHorizonMetrics({ date, year })) },
    addHorizonMetricsWS: (data) => { dispatch(addHorizonMetricsWS(data)) }
})

const Horizon = (props) => {

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        // takes the cow, to get details...
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = () => {
        setToggleModal2(!toggleModal2);
    };

    // const [webSocketData, setWebSocketData] = useState(null);

    // const handleSendMessageOLD = () => {
    //     WebSocketService.sendMessage("Hello");
    //     // setMessage('');
    // };

    // const { connect, sendMessage, isConnected } = WebSocketService3();

    // useEffect(() => {
    //     connect();  // Automatically connect when the component mounts
    //   }, [connect]);

    useEffect(() => {
        props.fetchHorizonMetrics({});

        // // Connect to WebSocket when the component mounts
        // WebSocketService.connect();

        // // Cleanup WebSocket connection when the component unmounts
        // return () => {
        //     WebSocketService.disconnect();
        // };
    }, []);

    // useEffect(() => {
    //     // Subscribe to the WebSocket topic
    //     const subscription = WebSocketService.client.subscribe('/topic/messages', (message) => {
    //       setMessages((prevMessages) => [...prevMessages, message.body]);
    //     });

    //     // Cleanup function to unsubscribe when the component is unmounted
    //     return () => {
    //       if (subscription) {
    //         subscription.unsubscribe();  // Properly unsubscribe from the WebSocket topic
    //       }
    //     };
    //   }, []);      

    //   const { isConnected, connect, sendMessage, disconnect } = WebSocketService();

    //   useEffect(() => {
    //     if (!isConnected) {
    //       connect();
    //     }

    //     return () => {
    //         if (isConnected) {
    //             disconnect();
    //         }
    //     };
    //   }, [isConnected, connect]);

    //   const handleSendMessage = () => {
    //     if (message.trim()) {
    //       sendMessage(message);  // Send message via WebSocket
    //       setMessage('');
    //     }
    //   };

    const [stompClient, setStompClient] = useState(null);
    useEffect(() => {
        //   const socket = new SockJS("http://localhost:8080/ws");
        // const socketFactory = () => new SockJS('http://localhost:8080/ws');
        var socket = () => new WebSocket('ws://localhost:8080/ws/websocket');

        const client = Stomp.over(socket);

        // Heartbeat settings (incoming and outgoing in milliseconds)
        const heartbeatIncoming = 20000; // 20 seconds
        const heartbeatOutgoing = 20000; // 20 seconds

        client.connect({
            // 'client-id': 'your-client-id', // Optional: use a custom client id
            'heart-beat': `${heartbeatOutgoing},${heartbeatIncoming}`,
        }, (frame) => {
            console.log('Connected: ' + frame);
            client.subscribe("/topic/killedCowMetrics", (message) => {
                const receivedMessage = JSON.parse(message.body);
                console.log(receivedMessage);
                props.addHorizonMetricsWS(receivedMessage);
            })
        }, (error) => {
            console.error('STOMP connection error: ', error);
        });

        setStompClient(client);

        return () => {
            if (client) {
                client.disconnect();
            }
        }
    }, []);


    // useEffect(() => {
    //     const client = new Client({
    //         brokerURL: 'http://localhost:8080/ws',
    //         connectHeaders: {
    //             // Any additional headers if needed (e.g., authorization tokens)
    //         },
    //         debug: function (str) {
    //             console.log("debugg")
    //             console.log(str);
    //         },
    //         reconnectDelay: 5000,
    //         heartbeatIncoming: 4000,
    //         heartbeatOutgoing: 4000,
    //     });

    //     client.onConnect = function (frame) {
    //         // Do something, all subscribes must be done is this callback
    //         // This is needed because this will be executed after a (re)connect
    //         console.log("CONNECTED>>>")
    //     };

    //     client.onStompError = function (frame) {
    //         // Will be invoked in case of error encountered at Broker
    //         // Bad login/passcode typically will cause an error
    //         // Complaint brokers will set `message` header with a brief message. Body may contain details.
    //         // Compliant brokers will terminate the connection after any error
    //         console.log('Broker reported error: ' + frame.headers['message']);
    //         console.log('Additional details: ' + frame.body);
    //     };

    //     console.log("activating...");
    //     client.activate();
    //     console.log("ACTIVATED");

    //     return () => {
    //         if (client) {
    //             client.deactivate(); // Deactivate the client when the component unmounts
    //         }
    //     }
    // }, [])



    return (
        <>
            <div className="flex justify-end m-2">
                <DatePickerCard />
            </div>

            <div className="flex">
                <div className="w-4/5 m-3 px-5">
                    <div className="flex gap-10 justify-around mb-5">
                        <MetricCard title={"Cows Request"} value={"---"} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                        <MetricCard title={"Killed Cow"} value={props.horizon.cowsKilledMetrics?.killedCow} arrow={"up"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                        <MetricCard title={"Remainder"} value={"---"} arrow={"down"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                    </div>

                    <div className="flex gap-10 justify-around">
                        <MetricCard title={"Weight Of Killed Cow"} value={props.horizon.cowsKilledMetrics?.killedCowsWeight + " KG"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                        <MetricCard title={"Total Waste"} value={props.horizon.cowsKilledMetrics?.killedCowsWaste + " KG"} arrow={"down"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                        <MetricCard title={"Miscarriage"} value={"--- Tn"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                    </div>
                </div>
                <div className="w-1/5 m-3">
                    <PerformanceCard />
                </div>
            </div>

            <div className="flex justify-end">
                <div className="w-4/5 m-3 px-5">
                    <div className="m-3">
                        <RateOfProductionCard />
                    </div>
                </div>
                <div className="w-1/5 m-3">
                    <OeeCard />
                    <UptimeCard />
                </div>
            </div>

            <HorizonTable handleToggleModal2={handleToggleModal2} />

            {toggleModal2 && <CowsModal cows={["123", "456"]} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}

            {toggleModal && <CowDetailsModal handleToggleModal={handleToggleModal} />}
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Horizon);