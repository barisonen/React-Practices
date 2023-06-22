import React, { useEffect } from 'react';
import './App.css';
import Stomp, { Client } from 'stompjs';

const App = () => {
  useEffect(() => {
    let stompClient = Stomp.client('ws://localhost:8080/deneme');
    let headers = {
      ack: 'client',
    };

    stompClient.connect({}, function (frame: any) {
      if (stompClient != null) {
        stompClient.subscribe(
          '/topic/chat',
          (message: any) => {
            console.log(message);
          },
          headers
        );
      }
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>hello</header>
    </div>
  );
};

export default App;
