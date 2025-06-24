import './App.css';
import React, { useState } from 'react';
import { genTicket, getSum } from './helper';
import Ticket from './Ticket';
import GenerateNewTicket from './GenTicket';
import BuyTicket from './BuyTickets';

function App() {
  const num = 3;

  // 🎟️ Ticket state
  const [ticket, setTicket] = useState(genTicket(num));

  // ✅ Message & Lock for Buy
  const [message, setMessage] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  // 🔁 Generate new ticket
  const updateTicket = () => {
    setTicket(genTicket(num));
    setMessage('');
    setIsLocked(false); // unlock for new ticket
  };

  // 🛒 Buy handler
  const handleBuy = () => {
    const sum = getSum(ticket);
    if (sum === 15) {
      setMessage('🎉 Yayyyy U won!');
    } else {
      setMessage('❌ Better Luck Next Time');
    }
    setIsLocked(true); // ticket locked after buy
  };

  return (
    <div className="App">
      <h2>Your Ticket</h2>
      <Ticket ticket={ticket} />
      <GenerateNewTicket onClick={updateTicket} />
      <BuyTicket
        ticket={ticket}
        onBuy={handleBuy}
        isLocked={isLocked}
        message={message}
      />
    </div>
  );
}

export default App;
