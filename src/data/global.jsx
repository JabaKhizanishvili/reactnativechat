import React, { useState, useEffect, useRef, memo } from "react";
import useWebSocket, {ReadyState} from 'react-native-use-websocket';
const socketUrl = 'wss://jd.self.ge:8080/chat';

const useCustomWebSocket = () => {
  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log('opened');
    },
    shouldReconnect: (closeEvent) => true,
  });

  const [messageHistory, setMessageHistory] = useState([]);




  useEffect(() => {
    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (getWebSocket()) {
        getWebSocket().close();
      }
    };
  }, []);


  useEffect(() => { 
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);


  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[ReadyState];
  
  return {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    connectionStatus,
    messageHistory
  };
};

export default useCustomWebSocket;
