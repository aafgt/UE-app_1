import { Client } from "@stomp/stompjs";
import { useState, useEffect, useCallback } from "react";
// import SockJS from "sockjs-client";

const WebSocketService = () => {
    const [client, setClient] = useState(null);  // To store the WebSocket client
    const [isConnected, setIsConnected] = useState(false);  // Track connection state

    // This function will handle WebSocket message reception
    const onMessageReceived = useCallback((message) => {
        console.log('Received:', message.body);
    }, []);

    useEffect(() => {
        // Initialize the WebSocket client when the component mounts
        const stompClient = new Client({
            brokerURL: 'http://localhost:8080/ws',  // WebSocket URL
            connectHeaders: {},
            debug: (str) => console.log(str),
            onConnect: () => {
                console.log('WebSocket Connected');
                setIsConnected(true);   // Update state when connected
                stompClient.subscribe('/topic/killedCowMetrics', onMessageReceived);
            },
            onStompError: (frame) => {
                console.error('Error connecting to WebSocket:', frame);
            }
        });

        setClient(stompClient);   // Store the client

        return () => {
            // Cleanup the WebSocket connection on component unmount
            if (stompClient) {
                stompClient.deactivate();
                setIsConnected(false);  // Update connection state when disconnected
            }
        };
    }, [onMessageReceived]);    // Dependencies for the effect

    // Function to send messages
    const sendMessage = useCallback((message) => {
        if (client && client.connected) {
            client.send('/app/chat', {}, message);  // Send message to WebSocket server
        } else {
            console.error('WebSocket not connected');
        }
    }, [client]);

    // Function to connect (triggering the activation of the WebSocket client)
    const connect = useCallback(() => {
        if (client && !client.connected) {
            client.activate();
        }
    }, [client]);

    // Function to disconnect
    const disconnect = useCallback(() => {
        if (client && client.connected) {
            client.deactivate();
            setIsConnected(false); // Update connection state when disconnected
        }
    }, [client]);

    return {
        isConnected,
        connect,
        sendMessage,
        disconnect
    };
}

export default WebSocketService;