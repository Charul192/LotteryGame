export default function RandNum(){
    const random = Math.floor(Math.random() * 10); // 0 to 9
    const random2 = Math.floor(Math.random() * 10);
    const random3 = Math.floor(Math.random() * 10);
    return(
        <>
        <h1>The Lottery number is:</h1>
        <div>
            <span>{random}</span>
            <span>{random2}</span>
            <span>{random3}</span>
        </div>
        </>
    );
}