export const CustomButton=()=>{ //EVENT HANDLER
    const handleClick=()=>{
        alert("thanks for liking!");
    };
    return(
        <button onClick={handleClick}>hey event handling</button>
    );
}