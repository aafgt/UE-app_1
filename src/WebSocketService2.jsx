// import { useState } from "react";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const WebSocketService2 = () => {

    // const [stompClient, setStompClient] = useState(null);
    var stompClient = null;

    const connect = () => {
        const socket = new SockJS("ws://localhost:8080/ws");
        stompClient = Stomp.over(socket);
        // setStompClient(Stomp.over(socket));
        stompClient.connect({}, (frame) => {
            console.log("Connected: " + frame);
            stompClient.subscribe("/topic/killedCowsMetric", (message) => {
                showMessage(JSON.parse(message.body));
            })
        });
    };

    const showMessage = (message) => {
        console.log(message);
    };

  return {
    connect
  };
}

export default WebSocketService2;