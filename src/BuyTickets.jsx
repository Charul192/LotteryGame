import Ticket from "./Ticket";

export default function BuyTicket({ ticket, onBuy, isLocked, message }) {
  const handleClick = () => {
    if (!isLocked) onBuy();
  };

  return (
    <div>
      <Ticket ticket={ticket} />
      <button onClick={handleClick} disabled={isLocked}>
        {isLocked ? "Ticket Locked" : "Buy Ticket"}
      </button>
      <p>{message}</p>
    </div>
  );
}
