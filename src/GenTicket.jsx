import { genTicket } from "./helper"

export default function GenerateNewTicket({onClick}){
    return(
        <>
        <button onClick = {onClick}>Generate New Ticket</button>
        {/* <button onClick = {onClick}>Buy Ticket</button> */}
        </>
    )
}