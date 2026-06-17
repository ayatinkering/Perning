export const UserDetails=({name,isOnline})=>{
    return(
        <div>User Details
        <h4>{name}</h4>
        <span>{isOnline?"ONLINE":"offline"}</span>
        <p>{isOnline?"available for chat":"not avail"}</p>
        {isOnline?(
            <button>send message</button>
        ):(
            <small>check later</small>
        )}

        </div>
    );
}

//CONDITIONAL RENDERING
//TERNARY Op is compact if operator
//or use && if first statement true, then renders second statement