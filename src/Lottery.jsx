import {useState} from "react";
import "./Lottery.css";
import {genTicket, getSum} from "./helper.js"

export default function Lottery(){
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = getSum(ticket) === 15;
    let buyTicket = () => {
        setTicket(genTicket(3));
};
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className = "ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick = {buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations U won!"}</h3>
        </div>
    );
}