// import { useState, useEffect } from "react";
// import { Stomp } from "@stomp/stompjs";
// import SockJS from "sockjs-client";

// const WebSocketService3 = () => {
//   const [stompClient, setStompClient] = useState(null);  // Manage WebSocket client state
//   const [isConnected, setIsConnected] = useState(false);  // Track connection status

//   // Function to connect to WebSocket server
//   const connect = () => {
//     const socket = new SockJS("http://localhost:8080/ws");
//     const client = Stomp.over(socket);

//     // Set the client state
//     setStompClient(client);

//     client.connect({}, (frame) => {
//       console.log("Connected: " + frame);
//       setIsConnected(true);  // Update connection status

//       // Subscribe to the topic once connected
//       client.subscribe("/topic/killedCowMetrics", (message) => {
//         showMessage(JSON.parse(message.body));
//       });
//     }, (error) => {
//       console.error("WebSocket error:", error);
//     });
//   };

//   // Function to handle incoming messages
//   const showMessage = (message) => {
//     console.log(message);
//   };

//   // Cleanup WebSocket connection when the component unmounts
//   useEffect(() => {
//     return () => {
//       if (stompClient) {
//         stompClient.disconnect(() => {
//           console.log("Disconnected");
//           setIsConnected(false);
//         });
//       }
//     };
//   }, [stompClient]);

//   // Optionally, add functionality to send messages
//   const sendMessage = (message) => {
//     if (stompClient && isConnected) {
//       stompClient.send("/app/chat", {}, message);
//     } else {
//       console.error("Not connected to WebSocket");
//     }
//   };

//   return {
//     connect,
//     sendMessage,
//     isConnected,  // To track if the WebSocket is connected
//   };
// };

// export default WebSocketService3;



import { useState, useEffect } from "react";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const WebSocketService3 = () => {
  const [stompClient, setStompClient] = useState(null);  // To store the WebSocket client
  const [isConnected, setIsConnected] = useState(false);  // To track WebSocket connection status

  // Function to connect to WebSocket
  const connect = () => {
    if (stompClient) {
      console.log("Already connected");
      return;  // Prevent connecting again if already connected
    }

    const socket = new SockJS("http:/localhost:8080/ws");
    const client = Stomp.over(socket);

    client.connect({}, (frame) => {
      console.log("Connected: " + frame);
      setIsConnected(true);  // Update connection status

      // Subscribe to the topic once connected
      client.subscribe("/topic/killedCowsMetric", (message) => {
        showMessage(JSON.parse(message.body));
      });

      // Save the client to state to avoid reinitialization
      setStompClient(client);
    }, (error) => {
      console.error("WebSocket error:", error);
    });
  };

  // Function to display received messages
  const showMessage = (message) => {
    console.log("Received message: ", message);
  };

  // Cleanup WebSocket connection when the component is unmounted
  useEffect(() => {
    return () => {
      if (stompClient) {
        stompClient.disconnect(() => {
          console.log("Disconnected");
          setIsConnected(false);
        });
      }
    };
  }, [stompClient]);  // Dependency array makes sure cleanup only runs when stompClient changes

  // Function to send messages
  const sendMessage = (message) => {
    if (stompClient && isConnected) {
      stompClient.send("/app/chat", {}, message);  // Send the message to the WebSocket server
    } else {
      console.error("WebSocket is not connected");
    }
  };

  return {
    connect,
    sendMessage,
    isConnected,
  };
};

export default WebSocketService3;