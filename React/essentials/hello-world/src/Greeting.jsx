//DEFAULT Prop values, if nothing is passed, SPREAD OPERATOR ...
export const Greeting=({name="Guest",message="hello"})=>{
    return(
        <>
        <h2>{message}, {name}</h2>
        <div>
            children
        </div>
        </>
    );
}

//render CHILDREN as a special prop, wraps other content inside a component